import { stringify } from "@_unit/unit/lib/spec/stringify";

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
                        }
                    },
                    "input": {
                        "bundle": {
                            "metadata": {
                                "position": {
                                    "x": 37,
                                    "y": -176
                                },
                                "data": stringify(myBundle)
                            }
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
            "id": "4a5879fc-88c9-477c-a89d-a6eba97cb4fc",
            "component": {
                "subComponents": {
                    "bundleeditor": {
                        "children": []
                    }
                },
                "children": [
                    "bundleeditor"
                ],
                "defaultWidth": 180,
                "defaultHeight": 120
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
                                "ignored": true
                            }
                        },
                        "output": {
                            "graph": {}
                        }
                    },
                    "frombundle": {
                        "id": "de2d42e2-4fca-4a3f-8783-3585c546e88b",
                        "input": {
                            "bundle": {}
                        },
                        "output": {
                            "graph": {}
                        }
                    },
                    "editor": {
                        "id": "e80c912e-7508-11ea-966b-436805345ff0",
                        "input": {
                            "style": {},
                            "attr": {
                                "ignored": true
                            },
                            "graph": {},
                            "disabled": {
                                "ignored": true
                            },
                            "fullwindow": {
                                "ignored": true
                            },
                            "frame": {
                                "ignored": true
                            },
                            "zoom": {
                                "ignored": true
                            },
                            "controls": {
                                "ignored": true
                            }
                        },
                        "output": {
                            "graph": {
                                "ignored": true
                            }
                        }
                    }
                },
                "merges": {
                    "0": {
                        "new": {
                            "output": {
                                "graph": true
                            }
                        },
                        "editor": {
                            "input": {
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
                "render": true,
                "component": {
                    "subComponents": {
                        "editor": {
                            "children": [],
                            "childSlot": {},
                            "width": 360,
                            "height": 360
                        }
                    },
                    "children": [
                        "editor"
                    ],
                    "defaultWidth": 360,
                    "defaultHeight": 360
                },
                "id": "7363c261-9c5e-402d-a302-5b280b4789c1"
            }
        }
    }
}