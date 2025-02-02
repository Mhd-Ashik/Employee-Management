package com.manage.ems_backend.controller;


import com.manage.ems_backend.dto.EmployeeDto;
import com.manage.ems_backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController 
@RequestMapping("/api/employees")
public class EmployeeController { 

    private EmployeeService employeeService;

    //Rest Api
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    //Get employee Rest Api
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId){
        EmployeeDto employeeDto = employeeService.getEmployeeById(employeeId);
        return new ResponseEntity<>(employeeDto, HttpStatus.OK);
    }

    //Get all employees
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getALlEmployees(){
        List<EmployeeDto> employees = employeeService.getAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    // Update employee Rest Api
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId, @RequestBody EmployeeDto updateEmployee){
        EmployeeDto employeeDto = employeeService.updateEmployee(employeeId,updateEmployee);
        return new ResponseEntity<>(employeeDto, HttpStatus.OK);
    }

    // Delete employee
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee deleted succesfully!");
    }

}
