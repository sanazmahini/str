import { CreateButton } from "./components/modules/CreateButton";
import { Filter } from "./components/modules/Filter";
import { LatestUpdate } from "./components/modules/LatestUpdate";
import { ListHeader } from "./components/modules/ListHeader";
import { Serach } from "./components/modules/Serach";
import { PageHeader } from "./components/templates/PageHeader";

export default function Home() {
  return (
    <div className="">
      <PageHeader title="معاملات مشکوک" />
      <div className="w-[95%] m-auto flex justify-between items-center bg-gray-100 p-3 rounded-3xs mt-4">
        <ListHeader title="لیست گزارش ها">
          <Serach />
          <Filter />
          <CreateButton />
        </ListHeader>
      </div>
    </div>
  );
}
