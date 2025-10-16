# Default server configuration
#
server {
	listen 80 default_server;
	listen [::]:80 default_server;
	root /var/www/html/site;
	index index.html;
	server_name ilya-prof;

	# ---- Настройка для /crm ----
	location /crm/ {
        alias /var/www/html/crm/;
        index index.html;
        try_files $uri $uri/ /crm/index.html;
    }	

	# ---- Настройка для /tma ----
	location /tma/ {
        alias /var/www/html/tma/;
        index index.html;
        try_files $uri $uri/ /tma/index.html;
	}
}  # ← Эта скобка обязательна!