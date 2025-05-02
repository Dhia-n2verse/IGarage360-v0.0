import React from "react";
import { Download, Upload, Plus } from "lucide-react"

export default function VehicleHeader() {
    return (
      

      <div className="vehicle-page">
        <div>
          <h1 className="text-3xl font-bold">Vehicles</h1>
          <p className="text-sm text-muted-foreground">
            Manage your vehicle database and registrations.
          </p>
        </div>
        {/* <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> Export
            </Button>
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" /> Import
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> New Vehicle
            </Button>
          </div>
        </div> */}
      </div>
    )
  }