import React, { useEffect, useState} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import { exerciseOptions, fetchData } from '../utils/fetchData'

const SearchExercises = () => {
  const [search, setSearch] = useState("")

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', 
        exerciseOptions);

        console.log(exercisesData)
    }
  }

  return (
    <Stack alignItems="center" mt="37px" p="20px" justifyContent="center">
      <Typography fontWeight={700} sx={{
        fontSize: {lg: "44px", xs: "30px"}
      }}
      mb="50" textAlign="center">
        Exercícios Incríveis Que <br /> 
        Você Deveria Saber
      </Typography>

      <Box position="relative" mb="72px">
        <TextField 
        sx={{
          input: {fontWeight:"700", border:"none", borderRadius: "4px"},
          width: { lg: "800px", xs: "350px"},
          backgroundColor: "#fff",
          borderRadius: "40px"
        }}
        height="76px"
        onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
        placeholder="Pesquise Exercícios"
        value={search}
        type="text"/>

        <Button className="search-btn"
          sx={{
            bgcolor: '#ff2625',
            color: "#fff",
            width: { lg: "100px", xs: "80px"},
            fontSize: { lg: "20px", xs: "14px"},
            height: "56px",
            position: "absolute",
            right: "0"
          }}
          onClick={handleSearch}
        >
          <SearchIcon />
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises