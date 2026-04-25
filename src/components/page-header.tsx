import { Breadcrumbs } from './breadcrumbs';

export function PageHeader() {
  return (
    <div className="items-end flex justify-between relative mb-[-50px] pt-[50px] pr-[66.5px] pb-[50px] pl-[66.5px] z-[9]">
      <div className="grow w-[70%] basis-[0%] max-w-[800px] min-w-[270px]">
        <Breadcrumbs />
        <h1 className="font-medium text-[27.5px] leading-[33px]">Products</h1>
      </div>
    </div>
  );
}
