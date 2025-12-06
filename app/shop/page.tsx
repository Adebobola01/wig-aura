import Filter from "@/components/Filter";
import Pagination from "@/components/Pagination";
import ShopCard from "@/components/ShopCard";
import ShopNavbar from "@/components/ShopNavbar";
import { ChevronDown } from "lucide-react";
import { it } from "node:test";

type cardType = {
  imgUrl: string;
  name: string;
  price: number;
};

const cardsData: cardType[] = [
  {
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJIZ9t7ynF7zzJ1rGlmkNJC1I2hOCs3gnfjhKm6KRVZr2sdyPecXGKqumPMvHY0Dioh5y7YhWhO_0DEO-dGntkfdgdaSMcQ0HcAPnR1-etp7Ajd7g6tuYRsjGiUFCZSntBjh8MRVt0ElOa2hn8qVBu3_3SDhRZcq7uZi1MJkNeDA4402M9EQFYrjrE8Pyj-EKrdHqym8OACSCtOvG8oSTeDUqu3ShbTnnTV1TIDP2ILxhMjlqaQBLJqxFOMT_-yFRXWLxpVxrAipU",
    name: "Classic Blonde Bob",
    price: 180,
  },
  {
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAD7N4MXezAZ2Ey6O-qir6jhhPVwrGO_g9U-iBI8OSJevgCHjPhRED3TdzoOznnVrQCOblbPOEaIw8nO09OoxYgYU_OmLqXLhxSi2Dw3gHSWUvvUrExGLRpQoSinCdkt39O4uQlY9A4fE5S2Zr-Y-K9YB4izWJQi9jXdGP2MQohm2tCQXqLvBh7ZCw--_jgmprDowYnjlYN48jH-gqFDSyX7nFnBJy3McdCAEGxvhlOsbhZqDr3zx5IV9jXamuxS_22k8nKEDPUiTU",
    name: "Espresso Wave",
    price: 250,
  },
  {
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAa1oAxJzlml0tHuaNFWXCULkqG9lVLYQF232Ap5G5Ty_iCGXQc1b47JTDWhDN8vuo3Kv6bAJNL40BFMbEeyrZfMpd1IDM-sEt0IY3sl-aoqz8CM8DqobVt7KrscEKesi1XOVDNp3O41HTVV7q-ISL48H-7XbqUo17dyQIp5EGNoWzGfU2_PCJzWPJLqbNUO_rJk4dXx73uf8_wtc-ehKD2ObZAbcV4iMomJ1ViwAoQs6Y68QYpNX5zwVC5jXW9OpTlXUBjErcUsg8",
    name: "Ruby Red Curls",
    price: 220,
  },
  {
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJWKchPNunq8pVkNsBIBjTGamraXgHn3QkAqnWGO-Gtc1xad1_zMLhs00UH8aSOrQoPdeEXgzyhH0PhZU1Zpww4KJqi3lJCCaInQ3oSpHkX6eceWOu8xnfJ95QMDzM5HMAEXYVHuGxjV6j5ajWkJ8Zt_hySQMIgEZQyCOgnyzAGBYv7NvEk2omtRWM9jYUNZk_qyvz6u63hXjsEIRszZTik1Ij6rva2okjDkU1iL-SKI94TIFZnGWUX_Ia5MU6UQnPjjZyoTMrSXQ",
    name: "Midnight Straight",
    price: 275,
  },
  {
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAjLXLayxxav9M-CQh3ku-ffvCzXr2DwnuIGWOnI_EVLYoNQyVo3m65WpoozEaU9TUUTZXAfpkcdwOAvDUSaHXT_IW0zp-cb4FwY7H1VL1WDUbu0xF3HMlwOxF-YBSWf6iOboegMI5RhpJNEF-AmufnredX1Bs5ZcDnx9q2QY9A_jTNAE3vRH-MZHMcMfksc6xKX_B-0r-asGyk5AyU6FfdigaKP1C1yQbxO8nc0rQxTpwIT0_II_BoIVLmLVMVTurH94vVKZC0qM",
    name: "Cotton Candy Dream",
    price: 195,
  },
  {
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIAuB_8Nbe6KmViMcG4oaDiWfCSGZz0KWo-9OAm7uSwMj9e7rrfAafMn9QqFB67P3apKiVT_iIr0RytawhbJo7rpPIgfLVFulUaow00vRKKzCbIKXHTy4sXWZQUJR-pNYvX2WFGd5wLxvsgWaTZp5CMxzizQDmVHGKNeS7iiEp_2gaQdiwAA2RiOJwBbiX_M3j7jc-GX6zeEqjT4PZzX2GMQyIdq_OC1jr1dSwNS7yeMoeqfwwNuzugthbwx1S9RWRdIwB_y9oo7A",
    name: "Sterling Silver Pixie",
    price: 160,
  },
  {
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJIZ9t7ynF7zzJ1rGlmkNJC1I2hOCs3gnfjhKm6KRVZr2sdyPecXGKqumPMvHY0Dioh5y7YhWhO_0DEO-dGntkfdgdaSMcQ0HcAPnR1-etp7Ajd7g6tuYRsjGiUFCZSntBjh8MRVt0ElOa2hn8qVBu3_3SDhRZcq7uZi1MJkNeDA4402M9EQFYrjrE8Pyj-EKrdHqym8OACSCtOvG8oSTeDUqu3ShbTnnTV1TIDP2ILxhMjlqaQBLJqxFOMT_-yFRXWLxpVxrAipU",
    name: "Classic Blonde Bob",
    price: 180,
  },
  {
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAD7N4MXezAZ2Ey6O-qir6jhhPVwrGO_g9U-iBI8OSJevgCHjPhRED3TdzoOznnVrQCOblbPOEaIw8nO09OoxYgYU_OmLqXLhxSi2Dw3gHSWUvvUrExGLRpQoSinCdkt39O4uQlY9A4fE5S2Zr-Y-K9YB4izWJQi9jXdGP2MQohm2tCQXqLvBh7ZCw--_jgmprDowYnjlYN48jH-gqFDSyX7nFnBJy3McdCAEGxvhlOsbhZqDr3zx5IV9jXamuxS_22k8nKEDPUiTU",
    name: "Espresso Wave",
    price: 250,
  },
  {
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAa1oAxJzlml0tHuaNFWXCULkqG9lVLYQF232Ap5G5Ty_iCGXQc1b47JTDWhDN8vuo3Kv6bAJNL40BFMbEeyrZfMpd1IDM-sEt0IY3sl-aoqz8CM8DqobVt7KrscEKesi1XOVDNp3O41HTVV7q-ISL48H-7XbqUo17dyQIp5EGNoWzGfU2_PCJzWPJLqbNUO_rJk4dXx73uf8_wtc-ehKD2ObZAbcV4iMomJ1ViwAoQs6Y68QYpNX5zwVC5jXW9OpTlXUBjErcUsg8",
    name: "Ruby Red Curls",
    price: 220,
  },
  {
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJWKchPNunq8pVkNsBIBjTGamraXgHn3QkAqnWGO-Gtc1xad1_zMLhs00UH8aSOrQoPdeEXgzyhH0PhZU1Zpww4KJqi3lJCCaInQ3oSpHkX6eceWOu8xnfJ95QMDzM5HMAEXYVHuGxjV6j5ajWkJ8Zt_hySQMIgEZQyCOgnyzAGBYv7NvEk2omtRWM9jYUNZk_qyvz6u63hXjsEIRszZTik1Ij6rva2okjDkU1iL-SKI94TIFZnGWUX_Ia5MU6UQnPjjZyoTMrSXQ",
    name: "Midnight Straight",
    price: 275,
  },
  {
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAjLXLayxxav9M-CQh3ku-ffvCzXr2DwnuIGWOnI_EVLYoNQyVo3m65WpoozEaU9TUUTZXAfpkcdwOAvDUSaHXT_IW0zp-cb4FwY7H1VL1WDUbu0xF3HMlwOxF-YBSWf6iOboegMI5RhpJNEF-AmufnredX1Bs5ZcDnx9q2QY9A_jTNAE3vRH-MZHMcMfksc6xKX_B-0r-asGyk5AyU6FfdigaKP1C1yQbxO8nc0rQxTpwIT0_II_BoIVLmLVMVTurH94vVKZC0qM",
    name: "Cotton Candy Dream",
    price: 195,
  },
  {
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIAuB_8Nbe6KmViMcG4oaDiWfCSGZz0KWo-9OAm7uSwMj9e7rrfAafMn9QqFB67P3apKiVT_iIr0RytawhbJo7rpPIgfLVFulUaow00vRKKzCbIKXHTy4sXWZQUJR-pNYvX2WFGd5wLxvsgWaTZp5CMxzizQDmVHGKNeS7iiEp_2gaQdiwAA2RiOJwBbiX_M3j7jc-GX6zeEqjT4PZzX2GMQyIdq_OC1jr1dSwNS7yeMoeqfwwNuzugthbwx1S9RWRdIwB_y9oo7A",
    name: "Sterling Silver Pixie",
    price: 160,
  },
  {
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJIZ9t7ynF7zzJ1rGlmkNJC1I2hOCs3gnfjhKm6KRVZr2sdyPecXGKqumPMvHY0Dioh5y7YhWhO_0DEO-dGntkfdgdaSMcQ0HcAPnR1-etp7Ajd7g6tuYRsjGiUFCZSntBjh8MRVt0ElOa2hn8qVBu3_3SDhRZcq7uZi1MJkNeDA4402M9EQFYrjrE8Pyj-EKrdHqym8OACSCtOvG8oSTeDUqu3ShbTnnTV1TIDP2ILxhMjlqaQBLJqxFOMT_-yFRXWLxpVxrAipU",
    name: "Classic Blonde Bob",
    price: 180,
  },
  {
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAD7N4MXezAZ2Ey6O-qir6jhhPVwrGO_g9U-iBI8OSJevgCHjPhRED3TdzoOznnVrQCOblbPOEaIw8nO09OoxYgYU_OmLqXLhxSi2Dw3gHSWUvvUrExGLRpQoSinCdkt39O4uQlY9A4fE5S2Zr-Y-K9YB4izWJQi9jXdGP2MQohm2tCQXqLvBh7ZCw--_jgmprDowYnjlYN48jH-gqFDSyX7nFnBJy3McdCAEGxvhlOsbhZqDr3zx5IV9jXamuxS_22k8nKEDPUiTU",
    name: "Espresso Wave",
    price: 250,
  },
  {
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAa1oAxJzlml0tHuaNFWXCULkqG9lVLYQF232Ap5G5Ty_iCGXQc1b47JTDWhDN8vuo3Kv6bAJNL40BFMbEeyrZfMpd1IDM-sEt0IY3sl-aoqz8CM8DqobVt7KrscEKesi1XOVDNp3O41HTVV7q-ISL48H-7XbqUo17dyQIp5EGNoWzGfU2_PCJzWPJLqbNUO_rJk4dXx73uf8_wtc-ehKD2ObZAbcV4iMomJ1ViwAoQs6Y68QYpNX5zwVC5jXW9OpTlXUBjErcUsg8",
    name: "Ruby Red Curls",
    price: 220,
  },
  {
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJWKchPNunq8pVkNsBIBjTGamraXgHn3QkAqnWGO-Gtc1xad1_zMLhs00UH8aSOrQoPdeEXgzyhH0PhZU1Zpww4KJqi3lJCCaInQ3oSpHkX6eceWOu8xnfJ95QMDzM5HMAEXYVHuGxjV6j5ajWkJ8Zt_hySQMIgEZQyCOgnyzAGBYv7NvEk2omtRWM9jYUNZk_qyvz6u63hXjsEIRszZTik1Ij6rva2okjDkU1iL-SKI94TIFZnGWUX_Ia5MU6UQnPjjZyoTMrSXQ",
    name: "Midnight Straight",
    price: 275,
  },
  {
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAjLXLayxxav9M-CQh3ku-ffvCzXr2DwnuIGWOnI_EVLYoNQyVo3m65WpoozEaU9TUUTZXAfpkcdwOAvDUSaHXT_IW0zp-cb4FwY7H1VL1WDUbu0xF3HMlwOxF-YBSWf6iOboegMI5RhpJNEF-AmufnredX1Bs5ZcDnx9q2QY9A_jTNAE3vRH-MZHMcMfksc6xKX_B-0r-asGyk5AyU6FfdigaKP1C1yQbxO8nc0rQxTpwIT0_II_BoIVLmLVMVTurH94vVKZC0qM",
    name: "Cotton Candy Dream",
    price: 195,
  },
  {
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIAuB_8Nbe6KmViMcG4oaDiWfCSGZz0KWo-9OAm7uSwMj9e7rrfAafMn9QqFB67P3apKiVT_iIr0RytawhbJo7rpPIgfLVFulUaow00vRKKzCbIKXHTy4sXWZQUJR-pNYvX2WFGd5wLxvsgWaTZp5CMxzizQDmVHGKNeS7iiEp_2gaQdiwAA2RiOJwBbiX_M3j7jc-GX6zeEqjT4PZzX2GMQyIdq_OC1jr1dSwNS7yeMoeqfwwNuzugthbwx1S9RWRdIwB_y9oo7A",
    name: "Sterling Silver Pixie",
    price: 160,
  },
];

const Shop = () => {
  return (
    <div className="flex flex-col bg-(--surface-dark) pb-6">
      <ShopNavbar />
      <main className="flex flex-col sm:flex-row gap-6 px-4 relative ">
        <Filter />
        <div className="flex flex-col w-full mt-6 ">
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              <a
                className="text-[#cbbc90] text-sm font-medium leading-normal hover:text-primary"
                href="/"
              >
                Home
              </a>
              <span className="text-[#cbbc90] text-sm font-medium leading-normal">
                /
              </span>
              <a
                className="text-[#cbbc90] text-sm font-medium leading-normal hover:text-primary"
                href="/shop"
              >
                Shop
              </a>
              <span className="text-[#cbbc90] text-sm font-medium leading-normal">
                /
              </span>
              <span className="text-white text-sm font-medium leading-normal">
                All Wigs
              </span>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-3">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                Our Wig Collection
              </h1>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#493f22] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30">
                <span className="truncate">Sort by: Newest</span>
                <span className="material-symbols-outlined text-lg ml-1">
                  <ChevronDown />
                </span>
              </button>
            </div>
          </div>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {cardsData.map((item, idx) => (
              <ShopCard
                imgUrl={item.imgUrl}
                name={item.name}
                price={item.price}
                key={`${item.name}-${item.price}-${idx}`}
              />
            ))}
          </section>
          <Pagination />
        </div>
      </main>
    </div>
  );
};

export default Shop;
