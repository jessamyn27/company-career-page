import * as React from 'react';
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';

const defaultTheme = createTheme();
export default function Careers() {
    const [jobs, setJobs] = useState(null);
    const [job, setJob] = useState(null);
    const [showJobs, setShowJobs] = useState(true);
    const [showJob, setShowJob] = useState(false);
    const [showSearch, setShowSearch] = useState(true);
    const [content, setContent] = useState(null);

    const [searchTitles, setSearchTitles] = useState(null);
    const [titleSearchValue, setTitleSearchValue] = useState(null);
    const [showTitles, setShowTitles] = useState(false);
    const [searchResultsTitles, setSearchResultsTitles] = useState('');

    const [searchCities, setSearchCities] = useState(null);
    const [citySearchValue, setCitySearchValue] = useState(null);
    const [showCities, setShowCities] = useState(false);
    const [searchResultsCities, setSearchResultsCities] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(process.env.REACT_APP_API_KEY);
                const data = await response.json();
                const lists = data.jobs;
                let jobLocations = lists.map(list => list.location.name);
                jobLocations = [...new Set(jobLocations)].sort() ;
                let jobTitles = lists.map(list => list.title);
                jobTitles = [...new Set(jobTitles)].sort() ;
                setJobs(data.jobs);
                setSearchCities(jobLocations);
                setSearchTitles(jobTitles);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const handleClickToJobDetail = (event, job) => {
        let parseJobDetail = parse(job.content);
        let parseJobDetailFinal = parse(parseJobDetail);
        setShowJobs(false);
        setShowJob(true);
        setShowSearch(false);
        setJob(job);
        setContent(parseJobDetailFinal);
    }

    const handleClickToAllJobs = () => {
        setShowJobs(true);
        setShowJob(false);
        setShowTitles(false);
        setShowCities(false);
        setShowSearch(true);
        setTitleSearchValue(null);
        setJob(null);
        setContent(null);
    }

    const handleClickDownloadJob = () => {
        let parseJobDetail = parse(job.content);
        const texts = [job.title, job.location, job.id, parseJobDetail];
        const file = new Blob(texts, {type: 'text/plain'});
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        element.download = "Unity-Job-" + job.id + ".html";
        document.body.appendChild(element);
        element.click();
    }

    const handleSelectTitle = e => {
        setTitleSearchValue(e.target.value);
    };

    const handleTitleSearchResults = () => {
        setShowJobs(false);
        setShowCities(false);
        setShowTitles(true);
        let results = searchTitles.filter(function (title) {
            return title.includes(titleSearchValue)}).map(function (job) {
                return job;
            });
            setSearchResultsTitles(results);
    }

    const handleSelectCity = e => {
        setCitySearchValue(e.target.value);
    };

    const handleCitySearchResults = () => {
        setShowJobs(false);
        setShowTitles(false);
        setShowCities(true);
        let results = searchCities.filter(function (city) {
            return city.includes(citySearchValue)}).map(function (job) {
                return job;
            });
            setSearchResultsCities(results);
    }

    return (
        <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        {/* searchbar for titles section */}
        {/* todo: create child searchbar components and pass state children as props */}
        { showSearch &&
        <Container sx={{ justifyContent: 'center', display: 'flex', padding: '0 0 50px' }}>
            <Autocomplete type="text" 
                placeholder="Search"
                onSelect={handleSelectTitle}
                options={searchTitles}
                sx={{ width: 500 }} renderInput={(params) => <TextField {...params} label="Job Titles" />}
            />
            <Button type="text" onClick={handleTitleSearchResults}>
                Search Job Titles
            </Button>   
        </Container>
        }
        { showSearch &&
        <Container sx={{ justifyContent: 'center', display: 'flex', padding: '0 0 50px' }}>
            <Autocomplete type="text" 
                placeholder="Search"
                onSelect={handleSelectCity}
                options={searchCities}
                sx={{ width: 500 }} renderInput={(params) => <TextField {...params} label="Job Locations" />}
            />
            <Button type="text" onClick={handleCitySearchResults}>
                Search Locations
            </Button>   
        </Container>
        }
        { showTitles && 
        <Container sx={{ marginBottom: '100px'}}>
            <Box align="center" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Button onClick={handleClickToAllJobs} size="small">
                    <ChevronLeftIcon/>
                    Back To All Jobs
                </Button><br/>
            </Box>
            <Typography component="h6" >
                Success! We are currrently hiring for this job opportunity!
            </Typography>
            <Container sx={{ py: 2, display: 'flex', flexDirection: 'columns', justifyContent: 'center'}} maxWidth="md" >
            <Grid container spacing={1} >
            
            { searchResultsTitles && searchResultsTitles.length > 0 && searchResultsTitles.map((title) => (
                <Grid item key={title.id} xs={12} sm={12} md={12}>
                    <Card sx={{ width: '300', height: '100%', display: 'flex', justifyContent: 'center' }}>
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography component="h6">
                                {title}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
            </Container>
        </Container>
        }
        {showCities && 
        <Container sx={{ marginBottom: '100px'}}>
            <Box align="center" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Button onClick={handleClickToAllJobs} size="small">
                    <ChevronLeftIcon/>
                    Back To All Jobs
                </Button><br/>
            </Box>
            <Typography component="h6" >
                Success! We are currrently hiring in this location!
            </Typography>
            <Container sx={{ py: 2 }} maxWidth="md" >
                <Grid container spacing={1} >
                { searchResultsCities && searchResultsCities.length > 0 && searchResultsCities.map((city) => (
                    <Grid item key={city.id} xs={12} sm={12} md={12}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography component="h6">
                                    {city}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
        }
        {/* a job detail section */}
        {/* todo: create child container and pass state children as props */}
        {showJob && 
        <Container >
            <Card sx={{ height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row' }} >
                <CardContent >
                    <Box align="left" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Button onClick={handleClickToAllJobs} size="small">
                            <ChevronLeftIcon/>
                            Back To Jobs
                        </Button><br/>
                        <Button onClick={handleClickDownloadJob} size="small">
                            <ExpandMoreIcon/>
                            Save This Job
                            </Button>
                    </Box>
                    <Typography component="h1" id="job-detail">
                        {job.title}
                    </Typography>
                    <Typography id="content" component="div">
                        {content}
                    </Typography>
                    <Box align="left" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Button onClick={handleClickToAllJobs} size="small">
                            <ChevronLeftIcon/>Back To Jobs
                        </Button><br/>
                        <Button onClick={handleClickDownloadJob} size="small">
                            <ExpandMoreIcon/>
                            Save This Job
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Container>
        }
        {/* all jobs section */}
        {showJobs && 
        <Container sx={{ py: 2 }} maxWidth="md" >
            <Typography variant="h6" align="center" color="text.secondary" paragraph >
                All Current Open Positions
            </Typography>
            <Grid container spacing={4} >
                { jobs && jobs.length > 0 && jobs.map((job) => (
                <Grid item key={job.id} xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography component="h6">
                                {job.location.name}
                            </Typography>
                            <Typography gutterBottom variant="p" component="h4">
                                {job.title}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={event => handleClickToJobDetail(event, job)} size="small">Job Details</Button>
                        </CardActions>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Container>
        }
        </ThemeProvider>
    );
} 