import { stringify } from "unit/spec/stringify";

export function bundle_editor(myBundle: any) {
    return {
        "spec": {
            "type": "`U`&`G`",
            "name": "untitled",
            "units": {
                "bundleeditor": {
                    "id": "7363c261-9c5e-402d-a302-5b280b4789c1",
                    "metadata": {
                        "position": {
                            "x": 0,
                            "y": 0
                        },
                        "component": {
                            "width": 484,
                            "height": 348
                        }
                    },
                    "input": {
                        "bundle": {
                            "metadata": {
                                "position": {
                                    "x": -513,
                                    "y": -170
                                }
                            },
                            "data": stringify(myBundle)
                        }
                    }
                }
            },
            "merges": {},
            "inputs": {},
            "outputs": {},
            "metadata": {
                "icon": null,
                "description": "",
                "complexity": 3
            },
            "id": "ada2c846-a40d-4fb0-b721-94c880b80270",
            "component": {
                "subComponents": {
                    "bundleeditor": {
                        "children": []
                    }
                },
                "children": [
                    "bundleeditor"
                ],
                "defaultWidth": 360,
                "defaultHeight": 360
            }
        },
        "specs": {
            "7363c261-9c5e-402d-a302-5b280b4789c1": {
                "type": "`U`&`G`&`C`",
                "name": "bundle editor",
                "units": {
                    "new": {
                        "id": "324b9c5e-5810-11eb-bf7c-634b3bb07f8c",
                        "input": {
                            "graph": {},
                            "done": {
                                "ignored": true,
                                "metadata": {
                                    "position": {
                                        "x": -125,
                                        "y": -26
                                    }
                                }
                            }
                        },
                        "output": {
                            "graph": {
                                "metadata": {
                                    "position": {
                                        "x": -26,
                                        "y": 11
                                    }
                                }
                            }
                        },
                        "metadata": {
                            "position": {
                                "x": -186,
                                "y": 15
                            }
                        }
                    },
                    "frombundle": {
                        "id": "de2d42e2-4fca-4a3f-8783-3585c546e88b",
                        "input": {
                            "bundle": {
                                "metadata": {
                                    "position": {
                                        "x": -239,
                                        "y": 5
                                    }
                                }
                            }
                        },
                        "output": {
                            "graph": {}
                        },
                        "metadata": {
                            "position": {
                                "x": -288,
                                "y": 15
                            }
                        }
                    },
                    "app": {
                        "id": "4181691b-4790-4191-9b03-86c6c968d1b8",
                        "input": {
                            "style": {
                                "ignored": true,
                                "metadata": {
                                    "position": {
                                        "x": -21,
                                        "y": 74
                                    }
                                }
                            },
                            "disabled": {
                                "ignored": true,
                                "metadata": {
                                    "position": {
                                        "x": -23,
                                        "y": 46
                                    }
                                }
                            },
                            "graph": {},
                            "fullwindow": {
                                "ignored": true,
                                "metadata": {
                                    "position": {
                                        "x": -21,
                                        "y": -44
                                    }
                                }
                            },
                            "frame": {
                                "ignored": true,
                                "metadata": {
                                    "position": {
                                        "x": -13,
                                        "y": 21
                                    }
                                }
                            }
                        },
                        "output": {
                            "graph": {
                                "ignored": true,
                                "metadata": {
                                    "position": {
                                        "x": 475,
                                        "y": 11
                                    }
                                }
                            }
                        },
                        "metadata": {
                            "position": {
                                "x": 318,
                                "y": 211
                            }
                        }
                    }
                },
                "merges": {
                    "0": {
                        "app": {
                            "input": {
                                "graph": true
                            }
                        },
                        "new": {
                            "output": {
                                "graph": true
                            }
                        }
                    },
                    "1": {
                        "new": {
                            "input": {
                                "graph": true
                            }
                        },
                        "frombundle": {
                            "output": {
                                "graph": true
                            }
                        }
                    }
                },
                "inputs": {
                    "bundle": {
                        "plug": {
                            "0": {
                                "unitId": "frombundle",
                                "pinId": "bundle"
                            }
                        },
                        "ref": false
                    }
                },
                "outputs": {},
                "metadata": {
                    "icon": "question",
                    "description": ""
                },
                "component": {
                    "subComponents": {
                        "app": {}
                    },
                    "children": [
                        "app"
                    ],
                    "defaultWidth": 360,
                    "defaultHeight": 360
                },
                "id": "7363c261-9c5e-402d-a302-5b280b4789c1"
            }
        }
    }
}