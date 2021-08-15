const { isAuthenticated } = require("../../Authentication/helper/AuthApiCalls");
const API = process.env.REACT_APP_BACKEND;

exports.getCourses = async () => {
  let id = await isAuthenticated()._id;
  return fetch(`${API}/course/${id}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status !== 200) {
        return Promise.reject(response);
      }
      return response.json();
    })
    .catch((error) => {
      return error;
    });
};

exports.addCourse = async (courseInfo) => {
  let id = await isAuthenticated()._id;
  return fetch(`${API}/addcourse/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: JSON.stringify(courseInfo),
  })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response.json();
    })

    .catch((error) => {
      return error;
    });
};

exports.getAllUser = async () => {
  let id = await isAuthenticated()._id;
  return fetch(`${API}/users/${id}`)
    .then((response) => {
      if (!response.ok) return response;
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addUser = (userInfo, id) => {
  return fetch(`${API}/adduser/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: JSON.stringify(userInfo),
  })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response.json();
    })

    .catch((error) => {
      return error;
    });
};

exports.deleteUser = async ( _id) => { 
  const id = await isAuthenticated()._id ; 
  return fetch(`${API}/delete/${id}/${_id}`, {
    method: "Delete",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response.json();
    })

    .catch((error) => {
      return error;
    });
};

exports.assignCourse = async (assignedCourseInfo, id) => {
  return fetch(`${API}/assigncourse/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: JSON.stringify(assignedCourseInfo),
  })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response.json();
    })

    .catch((error) => {
      return error;
    });
};

exports.deleteCourse = async (id) => {
  return fetch(`${API}/delete/course/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      console.log(response.ok);
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response.json();
    })

    .catch((error) => {
      return error;
    });
};

exports.updateUser = (id, editInfo) => {
  return fetch(`${API}/edit/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(editInfo),
  })
    .then((response) => {
      console.log(response.ok);
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response.json();
    })

    .catch((error) => {
      return error;
    });
};

exports.getUsersByCourseId = async (id) => {
  let _id = await isAuthenticated()._id;
  return fetch(`${API}/users/${id}/${_id}`)
    .then((response) => {
      if (!response.ok) return response;
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.markAttendance = async (id, usersInfo) => {
  return fetch(`${API}/mark/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(usersInfo),
  })
    .then((response) => {
      console.log(response.ok);
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response.json();
    })

    .catch((error) => {
      return error;
    });
};

exports.editMarkeAttendance = async (id, usersInfo) => {
  return fetch(`${API}/mark/edit/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(usersInfo),
  })
    .then((response) => {
      console.log(response.ok);
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response.json();
    })

    .catch((error) => {
      return error;
    });
};
