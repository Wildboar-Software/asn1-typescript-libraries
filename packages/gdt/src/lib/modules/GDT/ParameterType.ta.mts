/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterType  ::=  INTEGER {
 *     -- User parameters                                      (9000 - 4294967295)
 * 
 *     -- MINK general                                         (6000 - 6100)
 *     pt-mink-daemon-type                                     (6000), -- daemon type
 *     pt-mink-daemon-id                                       (6001), -- daemon id
 *     pt-mink-auth-id                                         (6002), -- authentication identification
 *     pt-mink-auth-password                                   (6003), -- authentication password
 *     pt-mink-daemon-ip                                       (6004), -- daemon ip address
 *     pt-mink-daemon-port                                     (6005), -- daemon port
 *     pt-mink-daemon-description                              (6006), -- daemon description
 *     pt-mink-action                                          (6007), -- extra action
 *     pt-mink-dpi                                             (6008), -- deep packet inspection (DPI) flag
 *     pt-mink-spi                                             (6009), -- shallow/stateful packet inspection (SPI) flag
 *     pt-mink-timestamp                                       (6010), -- unix timestamp
 *     pt-mink-timestamp-nsec                                  (6011), -- unix timestamp nsec part
 *     pt-mink-security-phase                                  (6012), -- mink security phase
 *     pt-mink-loop-count                                      (6013), -- packet loop count
 *     pt-mink-checksum                                        (6014), -- checksum 
 *     pt-mink-timeout                                         (6015), -- timeout
 *     pt-mink-error                                           (6016), -- error code
 *     pt-mink-error-msg                                       (6017), -- error message
 *     pt-mink-status                                          (6018), -- status code
 *     pt-mink-status-msg                                      (6019), -- status message
 *     pt-mink-persistent-correlation                          (6020), -- persistent GUID
 * 
 *     -- MINK routing                                         (6100 - 6200)
 *     pt-mink-routing-destination                             (6100), -- routing destination address
 *     pt-mink-routing-source                                  (6101), -- routing source address
 *     pt-mink-routing-gateway                                 (6102), -- routing gateway address
 *     pt-mink-routing-interface                               (6103), -- routing network interface
 *     pt-mink-routing-priority                                (6104), -- routing priority
 *     pt-mink-router-status                                   (6105), -- routing capabilities status (0/1)
 *     pt-mink-routing-destination-type                        (6106), -- routing destination type
 *     pt-mink-routing-index                                   (6107), -- routing index
 *     pt-mink-trunk-label                                     (6108), -- trunk label
 *     pt-mink-connection-type                                 (6109), -- connection type
 *     pt-mink-service-id                                      (6110), -- service id
 *     pt-mink-command-id                                      (6111), -- command id
 *     pt-mink-routing-sub-destination                         (6112), -- routing sub destination
 *     pt-mink-routing-sub-destination-type                    (6113), -- routing sub destination type
 *     pt-mink-correlation-notification                        (6114), -- correlation notification request
 *     pt-mink-guid                                            (6115), -- correlation guid
 *     pt-mink-routing-service-id                              (6116), -- routing destination service id
 * 
 *     -- MINK events                                          (6200 - 6300)
 *     pt-mink-event-id                                        (6200), -- daemon event identification
 *     pt-mink-event-description                               (6201), -- daemon event description
 *     pt-mink-event-callback-id                               (6202), -- daemon event callback identification
 *     pt-mink-event-callback-priority                         (6203), -- daemon event callback priority
 * 
 *     -- MINK encryption                                      (6300 - 6400)
 *     pt-mink-enc-public-key                                  (6300), -- public encryption key
 *     pt-mink-enc-private-key                                 (6301), -- private encryption key
 *     pt-mink-enc-type                                        (6302), -- encryption type
 * 
 *     -- MINK statistics                                      (6400 - 7400)
 *     pt-mink-stats-id                                        (6400), -- stats id
 *     pt-mink-stats-description                               (6401), -- stats description
 *     pt-mink-stats-value                                     (6402), -- stats value
 *     pt-mink-stats-count                                     (6403), -- stats item count
 * 
 *     -- MINK configuration                                   (7400 - 7500)
 *     pt-mink-config-param-name                               (7400), -- configiration parameter name
 *     pt-mink-config-param-value                              (7401), -- configuration parameter value
 *     pt-mink-config-ac-line                                  (7402), -- line for auto completion
 *     pt-mink-config-cfg-item-name                            (7403), -- config item name
 *     pt-mink-config-cfg-item-desc                            (7404), -- config item description
 *     pt-mink-config-cfg-item-ns                              (7405), -- config item node state
 *     pt-mink-config-cfg-item-value                           (7406), -- config item committed value
 *     pt-mink-config-cfg-item-nvalue                          (7407), -- config item uncommitted value
 *     pt-mink-config-cfg-item-nt                              (7408), -- config item node type
 *     pt-mink-config-cfg-cm-mode                              (7409), -- config mode
 *     pt-mink-config-cfg-ac-err                               (7410), -- config auto completion error
 *     pt-mink-config-cli-path                                 (7411), -- config current cli path
 *     pt-mink-config-cfg-line                                 (7412), -- config line result
 *     pt-mink-config-ac-err-count                             (7413), -- config auto completion error count
 *     pt-mink-config-cfg-line-count                           (7414), -- config line result count
 *     pt-mink-config-cfg-item-path                            (7415), -- config item path
 *     pt-mink-config-cfg-item-notify                          (7416), -- config item on_change notification
 *     pt-mink-config-cfg-item-count                           (7417), -- config item count
 *     pt-mink-config-replication-line                         (7418), -- replication command
 * 
 *     -- MINK sms related                                     (7500 - 7600)
 *     pt-mink-sms-status                                      (7500), -- sms status
 *     pt-mink-sms-uuid                                        (7501), -- sms uuid
 * 
 *     -- MINK filtering related                               (7600 - 7700)
 *     pt-mink-filter-result                                   (7600), -- filter result
 *     pt-mink-filter-exit                                     (7601), -- filter exit rule
 *     pt-mink-filter-list-id                                  (7602), -- list id
 *     pt-mink-filter-list-label                               (7603), -- list label
 *     pt-mink-filter-data                                     (7604), -- generic filter input/output data
 *     pt-mink-filter-data-size                                (7605), -- generic filter input/output data size
 * 
 *     -- ETH header                                           (6xx)
 *     pt-eth-destination-mac                                  (600), -- ETH header destination mac address
 *     pt-eth-source-mac                                       (601), -- ETH header source mac address
 * 
 *     -- IP header                                            (7xx)
 *     pt-ip-destination-ip                                    (700), -- IP header destination ip address
 *     pt-ip-source-ip                                         (701), -- IP header source ip address
 * 
 *     -- TCP header                                           (8xx)
 *     pt-tcp-destination-port                                 (800), -- TCP header destination port
 *     pt-tcp-source-port                                      (801), -- TCP header source port
 * 
 *     -- UDP header                                           (9xx)
 *     pt-udp-destination-port                                 (900), -- UDP header destination port
 *     pt-udp-source-port                                      (901), -- UDP header source port
 * 
 *     -- SCTP header                                          (1xxx)
 *     pt-sctp-destination-port                                (1000), -- SCTP header destination port
 *     pt-sctp-source-port                                     (1001), -- SCTP header source port
 * 
 *     -- TCAP and GSM MAP related                             (5xx)
 *     pt-gsmmap-scoa-digits                                   (500), -- serviceCentreAddressOA digits
 *     pt-gsmmap-scoa-type-of-number                           (501), -- serviceCentreAddressOA type of number
 *     pt-gsmmap-scoa-numbering-plan                           (502), -- serviceCentreAddressOA numbering plan
 *     pt-gsmmap-scda-digits                                   (503), -- serviceCentreAddressDA digits
 *     pt-gsmmap-scda-type-of-number                           (504), -- serviceCentreAddressDA type of number
 *     pt-gsmmap-scda-numbering-plan                           (505), -- serviceCentreAddressDA numbering plan
 *     pt-gsmmap-imsi                                          (506), -- IMSI
 *     pt-gsmmap-msisdn-digits                                 (507), -- MSISDN digits
 *     pt-gsmmap-msisdn-type-of-number                         (508), -- MSISDN type of number
 *     pt-gsmmap-msisdn-numbering-plan                         (509), -- MSISDN numbering plan
 *     pt-tcap-source-transaction-id                           (510), -- TCAP Source Transaction Id
 *     pt-tcap-destination-transaction-id                      (511), -- TCAP Destination Transaction Id
 *     pt-tcap-opcode                                          (512), -- TCAP Operation code
 *     pt-tcap-component-type                                  (513), -- TCAP Component type
 *     pt-tcap-component-invoke-id                             (514), -- TCAP Invoke Id
 *     pt-tcap-error-type                                      (515), -- TCAP Error Type
 *     pt-tcap-error-code                                      (516), -- TCAP Error code
 *     pt-tcap-dialogue-context-oid                            (517), -- TCAP Dialogue application context oid
 *     pt-tcap-message-type                                    (518), -- TCAP Message type
 *     pt-gsmmap-nnn-digits                                    (519), -- GSM MAP network node number digits
 *     pt-gsmmap-nnn-type-of-number                            (520), -- GSM MAP nn type of number
 *     pt-gsmmap-nnn-numbering-plan                            (521), -- GSM MAP nn numbering plan
 *     pt-gsmmap-an-digits                                     (522), -- GSM MAP additional number digits
 *     pt-gsmmap-an-type-of-number                             (523), -- GSM MAP an type of number
 *     pt-gsmmap-an-numbering-plan                             (524), -- GSM MAP an numbering plan
 *     pt-gsmmap-sca-digits                                    (525), -- GSM MAP service centre address digits
 *     pt-gsmmap-sca-type-of-number                            (526), -- GSM MAP SCA type of number
 *     pt-gsmmap-sca-numbering-plan                            (527), -- GSM MAP SCA numbering plan
 *     pt-tcap-component-count                                 (528), -- TCAP Component count
 *     pt-tcap-dialogue-context-supported                      (529), -- TCAP Dialogue context supported
 *     pt-tcap-component-index                                 (530), -- TCAP Compoonent index currently processed
 *     pt-tcap-source-transaction-id-length                    (531), -- TCAP Source Transaction Id length
 *     pt-tcap-destination-transaction-id-length               (532), -- TCAP Destination Transaction Id length
 *     pt-gsmmap-version                                       (533), -- GSM MAP version
 * 
 *     -- GSM SMS TPDU (GSM 03.40) related                     (4xx)
 *     pt-smstpdu-tp-udhi                                      (400), -- 9.2.3.23 TP-User-Data-Header-Indicator (TP-UDHI)
 *     pt-smstpdu-tp-sri                                       (401), -- 9.2.3.4 TP-Status-Report-Indication (TP-SRI)
 *     pt-smstpdu-tp-mms                                       (402), -- 9.2.3.2 TP-More-Messages-to-Send (TP-MMS)
 *     pt-smstpdu-tp-mti                                       (403), -- 9.2.3.1 TP-Message-Type-Indicator (TP-MTI)
 *     pt-smstpdu-tp-oa-type-of-number                         (404), -- 9.2.3.7 TP-Originating-Address (TP-OA) type of number
 *     pt-smstpdu-tp-oa-numbering-plan                         (405), -- 9.2.3.7 TP-Originating-Address (TP-OA) numbering plan
 *     pt-smstpdu-tp-oa-digits                                 (406), -- 9.2.3.7 TP-Originating-Address (TP-OA) digits
 *     pt-smstpdu-tp-pid                                       (407), -- 9.2.3.9 TP-Protocol-Identifier (TP-PID)
 *     pt-smstpdu-tp-dcs                                       (408), -- 9.2.3.10 TP-Data-Coding-Scheme (TP-DCS)
 *     pt-smstpdu-tp-scts                                      (409), -- 9.2.3.11 TP-Service-Centre-Time-Stamp (TP-SCTS)
 *     pt-smstpdu-tp-udl                                       (410), -- 9.2.3.16 TP-User-Data-Length (TP-UDL) 
 *     pt-smstpdu-tp-ud                                        (411), -- 9.2.3.24 TP-User Data (TP-UD)
 *     pt-smstpdu-tp-rp                                        (412), -- 9.2.3.17 TP-Reply-Path (TP-RP) 
 *     pt-smstpdu-tp-srr                                       (413), -- 9.2.3.5 TP-Status-Report-Request (TP-SRR)
 *     pt-smstpdu-tp-vpf                                       (414), -- 9.2.3.3 TP-Validity-Period-Format (TP-VPF)
 *     pt-smstpdu-tp-rd                                        (415), -- 9.2.3.25 TP-Reject-Duplicates (TP-RD)
 *     pt-smstpdu-tp-da-type-of-number                         (416), -- 9.2.3.8 TP-Destination-Address (TP-DA) type of number
 *     pt-smstpdu-tp-da-numbering-plan                         (417), -- 9.2.3.8 TP-Destination-Address (TP-DA) numbering plan
 *     pt-smstpdu-tp-da-digits                                 (418), -- 9.2.3.8 TP-Destination-Address (TP-DA) digits
 *     pt-smstpdu-tp-vp                                        (419), -- 9.2.3.12 TP-Validity-Period (TP-VP)
 *     pt-smstpdu-msg-id                                       (420), -- Message Id
 *     pt-smstpdu-msg-parts                                    (421), -- Message parts
 *     pt-smstpdu-msg-part                                     (422), -- Message part
 *     pt-smstpdu-tp-mr                                        (423), -- Message reference
 *     pt-smstpdu-message-class                                (424), -- Message class
 * 
 *     -- SCCP related                                         (3xx)
 *     pt-sccp-destination-local-reference                     (300), -- Destination local reference
 *     pt-sccp-source-local-reference                          (301), -- Source local reference
 *     pt-sccp-called-party                                    (302), -- Called party address
 *     pt-sccp-calling-party                                   (303), -- Calling party address
 *     pt-sccp-protocol-class                                  (304), -- Protocol class
 *     pt-sccp-segmenting-reassembling                         (305), -- Segmenting/reassembling
 *     pt-sccp-receive-sequence-number                         (306), -- Receive sequence number
 *     pt-sccp-sequencing-segmenting                           (307), -- Sequencing/segmenting
 *     pt-sccp-credit                                          (308), -- Credit
 *     pt-sccp-release-cause                                   (309), -- Release cause
 *     pt-sccp-return-cause                                    (310), -- Return cause
 *     pt-sccp-reset-cause                                     (311), -- Reset cause
 *     pt-sccp-error-cause                                     (312), -- Error cause
 *     pt-sccp-refusal-cause                                   (313), -- Refusal cause
 *     pt-sccp-data                                            (314), -- Data
 *     pt-sccp-segmentation                                    (315), -- Segmentation
 *     pt-sccp-hop-counter                                     (316), -- Hop counter
 *     pt-sccp-importance                                      (317), -- Importance
 *     pt-sccp-long-data                                       (318), -- Long data
 *     pt-sccp-called-pa-routing-indicator                     (319), -- Called party routing indicator
 *     pt-sccp-called-pa-global-title-indicator                (320), -- Called party global title indicator
 *     pt-sccp-called-pa-ssn-indicator                         (321), -- Called party subsystem number indicator
 *     pt-sccp-called-pa-point-code-indicator                  (322), -- Called party point code indicator
 *     pt-sccp-called-pa-point-code-number                     (323), -- Called party point code number
 *     pt-sccp-called-pa-subsystem-number                      (324), -- Called party subsystem number
 *     pt-sccp-called-pa-gt-numbering-plan                     (325), -- Called party GT numbering plan
 *     pt-sccp-called-pa-gt-encoding-scheme                    (326), -- Called party GT encoding scheme
 *     pt-sccp-called-pa-gt-nature-of-address                  (327), -- Called party GT nature of address
 *     pt-sccp-called-pa-gt-address                            (328), -- Called party GT address
 *     pt-sccp-called-pa-gt-translation-type                   (329), -- Called party GT translation type
 *     pt-sccp-calling-pa-routing-indicator                    (330), -- Calling party routing indicator
 *     pt-sccp-calling-pa-global-title-indicator               (331), -- Calling party global title indicator
 *     pt-sccp-calling-pa-ssn-indicator                        (332), -- Calling party subsystem number indicator
 *     pt-sccp-calling-pa-point-code-indicator                 (333), -- Calling party point code indicator
 *     pt-sccp-calling-pa-point-code-number                    (334), -- Calling party point code number
 *     pt-sccp-calling-pa-subsystem-number                     (335), -- Calling party subsystem number
 *     pt-sccp-calling-pa-gt-numbering-plan                    (336), -- Calling party GT numbering plan
 *     pt-sccp-calling-pa-gt-encoding-scheme                   (337), -- Calling party GT encoding scheme 
 *     pt-sccp-calling-pa-gt-nature-of-address                 (338), -- Calling party GT nature of address
 *     pt-sccp-calling-pa-gt-address                           (339), -- Calling party GT address
 *     pt-sccp-calling-pa-gt-translation-type                  (340), -- Calling party GT translation type
 *     pt-sccp-message-type                                    (341), -- SCCP Message type
 * 
 *     -- M3UA related                                         (2xx)
 *     pt-m3ua-info-string                                     (200), -- INFO String
 *     pt-m3ua-routing-context                                 (201), -- Routing Context
 *     pt-m3ua-diagnostic-info                                 (202), -- Diagnostic Information
 *     pt-m3ua-heartbeat                                       (203), -- Heartbeat Data
 *     pt-m3ua-traffic-mode-type                               (204), -- Traffic Mode Type
 *     pt-m3ua-error-code                                      (205), -- Error Code
 *     pt-m3ua-status                                          (206), -- Status
 *     pt-m3ua-asp-identifier                                  (207), -- ASP Identifier
 *     pt-m3ua-affected-point-code                             (208), -- Affected Point Code
 *     pt-m3ua-correlation-id                                  (209), -- Correlation ID
 *     pt-m3ua-network-appearance                              (210), -- Network Appearance
 *     pt-m3ua-user-cause                                      (211), -- User/Cause
 *     pt-m3ua-congestion-indications                          (212), -- Congestion Indications
 *     pt-m3ua-concerned-destination                           (213), -- Concerned Destination
 *     pt-m3ua-routing-key                                     (214), -- Routing Key
 *     pt-m3ua-registration-result                             (215), -- Registration Result
 *     pt-m3ua-deregistration-result                           (216), -- Deregistration Result
 *     pt-m3ua-local-routing-key-identifier                    (217), -- Local-Routing Key Identifier
 *     pt-m3ua-destination-point-code                          (218), -- Destination Point Code
 *     pt-m3ua-service-indicators                              (219), -- Service Indicators
 *     pt-m3ua-origination-point-code-list                     (220), -- Originating Point Code List
 *     pt-m3ua-circuit-range                                   (221), -- Circuit Range
 *     pt-m3ua-protocol-data                                   (222), -- Protocol Data
 *     pt-m3ua-protocol-data-service-indicator                 (223), -- Protocol Data service indicator (SI)
 *     pt-m3ua-protocol-data-network-indicator                 (224), -- Protocol Data network indicator (NI)
 *     pt-m3ua-protocol-data-message-priority                  (225), -- Protocol Data message priority (MP)
 *     pt-m3ua-protocol-data-destination-point-code            (226), -- Protocol Data destination point code (DPC)
 *     pt-m3ua-protocol-data-originating-point-code            (227), -- Protocol Data originating point code (OPC)
 *     pt-m3ua-protocol-data-signalling-link-selection-code    (228), -- Protocol Data signalling link selection code (SLS)
 *     pt-m3ua-registration-status                             (229), -- Registration Status
 *     pt-m3ua-deregistration-status                           (230), -- Deregistration Status
 *     pt-m3ua-header-data                                     (231), -- M3UA header raw data
 *     pt-m3ua-as-label                                        (232), -- Application server (AS) label
 *     pt-m3ua-asp-label                                       (233)  -- Application server process (ASP) label
 * }
 * ```
 */
export
type ParameterType = INTEGER;

/**
 * @summary ParameterType_pt_mink_daemon_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_daemon_type: ParameterType = 6000; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_daemon_type
 * @constant
 * @type {number}
 */
export
const pt_mink_daemon_type: ParameterType = ParameterType_pt_mink_daemon_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_daemon_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_daemon_id: ParameterType = 6001; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_daemon_id
 * @constant
 * @type {number}
 */
export
const pt_mink_daemon_id: ParameterType = ParameterType_pt_mink_daemon_id; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_auth_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_auth_id: ParameterType = 6002; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_auth_id
 * @constant
 * @type {number}
 */
export
const pt_mink_auth_id: ParameterType = ParameterType_pt_mink_auth_id; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_auth_password
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_auth_password: ParameterType = 6003; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_auth_password
 * @constant
 * @type {number}
 */
export
const pt_mink_auth_password: ParameterType = ParameterType_pt_mink_auth_password; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_daemon_ip
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_daemon_ip: ParameterType = 6004; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_daemon_ip
 * @constant
 * @type {number}
 */
export
const pt_mink_daemon_ip: ParameterType = ParameterType_pt_mink_daemon_ip; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_daemon_port
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_daemon_port: ParameterType = 6005; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_daemon_port
 * @constant
 * @type {number}
 */
export
const pt_mink_daemon_port: ParameterType = ParameterType_pt_mink_daemon_port; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_daemon_description
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_daemon_description: ParameterType = 6006; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_daemon_description
 * @constant
 * @type {number}
 */
export
const pt_mink_daemon_description: ParameterType = ParameterType_pt_mink_daemon_description; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_action
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_action: ParameterType = 6007; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_action
 * @constant
 * @type {number}
 */
export
const pt_mink_action: ParameterType = ParameterType_pt_mink_action; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_dpi
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_dpi: ParameterType = 6008; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_dpi
 * @constant
 * @type {number}
 */
export
const pt_mink_dpi: ParameterType = ParameterType_pt_mink_dpi; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_spi
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_spi: ParameterType = 6009; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_spi
 * @constant
 * @type {number}
 */
export
const pt_mink_spi: ParameterType = ParameterType_pt_mink_spi; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_timestamp
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_timestamp: ParameterType = 6010; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_timestamp
 * @constant
 * @type {number}
 */
export
const pt_mink_timestamp: ParameterType = ParameterType_pt_mink_timestamp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_timestamp_nsec
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_timestamp_nsec: ParameterType = 6011; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_timestamp_nsec
 * @constant
 * @type {number}
 */
export
const pt_mink_timestamp_nsec: ParameterType = ParameterType_pt_mink_timestamp_nsec; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_security_phase
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_security_phase: ParameterType = 6012; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_security_phase
 * @constant
 * @type {number}
 */
export
const pt_mink_security_phase: ParameterType = ParameterType_pt_mink_security_phase; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_loop_count
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_loop_count: ParameterType = 6013; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_loop_count
 * @constant
 * @type {number}
 */
export
const pt_mink_loop_count: ParameterType = ParameterType_pt_mink_loop_count; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_checksum
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_checksum: ParameterType = 6014; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_checksum
 * @constant
 * @type {number}
 */
export
const pt_mink_checksum: ParameterType = ParameterType_pt_mink_checksum; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_timeout
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_timeout: ParameterType = 6015; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_timeout
 * @constant
 * @type {number}
 */
export
const pt_mink_timeout: ParameterType = ParameterType_pt_mink_timeout; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_error
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_error: ParameterType = 6016; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_error
 * @constant
 * @type {number}
 */
export
const pt_mink_error: ParameterType = ParameterType_pt_mink_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_error_msg
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_error_msg: ParameterType = 6017; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_error_msg
 * @constant
 * @type {number}
 */
export
const pt_mink_error_msg: ParameterType = ParameterType_pt_mink_error_msg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_status
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_status: ParameterType = 6018; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_status
 * @constant
 * @type {number}
 */
export
const pt_mink_status: ParameterType = ParameterType_pt_mink_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_status_msg
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_status_msg: ParameterType = 6019; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_status_msg
 * @constant
 * @type {number}
 */
export
const pt_mink_status_msg: ParameterType = ParameterType_pt_mink_status_msg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_persistent_correlation
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_persistent_correlation: ParameterType = 6020; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_persistent_correlation
 * @constant
 * @type {number}
 */
export
const pt_mink_persistent_correlation: ParameterType = ParameterType_pt_mink_persistent_correlation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_destination
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_destination: ParameterType = 6100; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_destination
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_destination: ParameterType = ParameterType_pt_mink_routing_destination; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_source
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_source: ParameterType = 6101; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_source
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_source: ParameterType = ParameterType_pt_mink_routing_source; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_gateway
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_gateway: ParameterType = 6102; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_gateway
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_gateway: ParameterType = ParameterType_pt_mink_routing_gateway; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_interface
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_interface: ParameterType = 6103; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_interface
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_interface: ParameterType = ParameterType_pt_mink_routing_interface; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_priority
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_priority: ParameterType = 6104; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_priority
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_priority: ParameterType = ParameterType_pt_mink_routing_priority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_router_status
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_router_status: ParameterType = 6105; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_router_status
 * @constant
 * @type {number}
 */
export
const pt_mink_router_status: ParameterType = ParameterType_pt_mink_router_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_destination_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_destination_type: ParameterType = 6106; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_destination_type
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_destination_type: ParameterType = ParameterType_pt_mink_routing_destination_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_index
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_index: ParameterType = 6107; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_index
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_index: ParameterType = ParameterType_pt_mink_routing_index; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_trunk_label
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_trunk_label: ParameterType = 6108; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_trunk_label
 * @constant
 * @type {number}
 */
export
const pt_mink_trunk_label: ParameterType = ParameterType_pt_mink_trunk_label; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_connection_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_connection_type: ParameterType = 6109; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_connection_type
 * @constant
 * @type {number}
 */
export
const pt_mink_connection_type: ParameterType = ParameterType_pt_mink_connection_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_service_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_service_id: ParameterType = 6110; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_service_id
 * @constant
 * @type {number}
 */
export
const pt_mink_service_id: ParameterType = ParameterType_pt_mink_service_id; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_command_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_command_id: ParameterType = 6111; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_command_id
 * @constant
 * @type {number}
 */
export
const pt_mink_command_id: ParameterType = ParameterType_pt_mink_command_id; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_sub_destination
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_sub_destination: ParameterType = 6112; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_sub_destination
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_sub_destination: ParameterType = ParameterType_pt_mink_routing_sub_destination; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_sub_destination_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_sub_destination_type: ParameterType = 6113; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_sub_destination_type
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_sub_destination_type: ParameterType = ParameterType_pt_mink_routing_sub_destination_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_correlation_notification
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_correlation_notification: ParameterType = 6114; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_correlation_notification
 * @constant
 * @type {number}
 */
export
const pt_mink_correlation_notification: ParameterType = ParameterType_pt_mink_correlation_notification; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_guid
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_guid: ParameterType = 6115; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_guid
 * @constant
 * @type {number}
 */
export
const pt_mink_guid: ParameterType = ParameterType_pt_mink_guid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_service_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_service_id: ParameterType = 6116; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_service_id
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_service_id: ParameterType = ParameterType_pt_mink_routing_service_id; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_event_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_event_id: ParameterType = 6200; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_event_id
 * @constant
 * @type {number}
 */
export
const pt_mink_event_id: ParameterType = ParameterType_pt_mink_event_id; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_event_description
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_event_description: ParameterType = 6201; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_event_description
 * @constant
 * @type {number}
 */
export
const pt_mink_event_description: ParameterType = ParameterType_pt_mink_event_description; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_event_callback_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_event_callback_id: ParameterType = 6202; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_event_callback_id
 * @constant
 * @type {number}
 */
export
const pt_mink_event_callback_id: ParameterType = ParameterType_pt_mink_event_callback_id; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_event_callback_priority
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_event_callback_priority: ParameterType = 6203; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_event_callback_priority
 * @constant
 * @type {number}
 */
export
const pt_mink_event_callback_priority: ParameterType = ParameterType_pt_mink_event_callback_priority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_enc_public_key
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_enc_public_key: ParameterType = 6300; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_enc_public_key
 * @constant
 * @type {number}
 */
export
const pt_mink_enc_public_key: ParameterType = ParameterType_pt_mink_enc_public_key; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_enc_private_key
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_enc_private_key: ParameterType = 6301; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_enc_private_key
 * @constant
 * @type {number}
 */
export
const pt_mink_enc_private_key: ParameterType = ParameterType_pt_mink_enc_private_key; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_enc_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_enc_type: ParameterType = 6302; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_enc_type
 * @constant
 * @type {number}
 */
export
const pt_mink_enc_type: ParameterType = ParameterType_pt_mink_enc_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_stats_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_stats_id: ParameterType = 6400; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_stats_id
 * @constant
 * @type {number}
 */
export
const pt_mink_stats_id: ParameterType = ParameterType_pt_mink_stats_id; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_stats_description
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_stats_description: ParameterType = 6401; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_stats_description
 * @constant
 * @type {number}
 */
export
const pt_mink_stats_description: ParameterType = ParameterType_pt_mink_stats_description; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_stats_value
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_stats_value: ParameterType = 6402; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_stats_value
 * @constant
 * @type {number}
 */
export
const pt_mink_stats_value: ParameterType = ParameterType_pt_mink_stats_value; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_stats_count
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_stats_count: ParameterType = 6403; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_stats_count
 * @constant
 * @type {number}
 */
export
const pt_mink_stats_count: ParameterType = ParameterType_pt_mink_stats_count; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_param_name
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_param_name: ParameterType = 7400; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_param_name
 * @constant
 * @type {number}
 */
export
const pt_mink_config_param_name: ParameterType = ParameterType_pt_mink_config_param_name; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_param_value
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_param_value: ParameterType = 7401; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_param_value
 * @constant
 * @type {number}
 */
export
const pt_mink_config_param_value: ParameterType = ParameterType_pt_mink_config_param_value; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_ac_line
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_ac_line: ParameterType = 7402; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_ac_line
 * @constant
 * @type {number}
 */
export
const pt_mink_config_ac_line: ParameterType = ParameterType_pt_mink_config_ac_line; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_name
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_item_name: ParameterType = 7403; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_name
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_item_name: ParameterType = ParameterType_pt_mink_config_cfg_item_name; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_desc
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_item_desc: ParameterType = 7404; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_desc
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_item_desc: ParameterType = ParameterType_pt_mink_config_cfg_item_desc; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_ns
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_item_ns: ParameterType = 7405; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_ns
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_item_ns: ParameterType = ParameterType_pt_mink_config_cfg_item_ns; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_value
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_item_value: ParameterType = 7406; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_value
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_item_value: ParameterType = ParameterType_pt_mink_config_cfg_item_value; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_nvalue
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_item_nvalue: ParameterType = 7407; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_nvalue
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_item_nvalue: ParameterType = ParameterType_pt_mink_config_cfg_item_nvalue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_nt
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_item_nt: ParameterType = 7408; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_nt
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_item_nt: ParameterType = ParameterType_pt_mink_config_cfg_item_nt; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_cm_mode
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_cm_mode: ParameterType = 7409; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_cm_mode
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_cm_mode: ParameterType = ParameterType_pt_mink_config_cfg_cm_mode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_ac_err
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_ac_err: ParameterType = 7410; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_ac_err
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_ac_err: ParameterType = ParameterType_pt_mink_config_cfg_ac_err; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cli_path
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cli_path: ParameterType = 7411; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cli_path
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cli_path: ParameterType = ParameterType_pt_mink_config_cli_path; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_line
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_line: ParameterType = 7412; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_line
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_line: ParameterType = ParameterType_pt_mink_config_cfg_line; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_ac_err_count
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_ac_err_count: ParameterType = 7413; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_ac_err_count
 * @constant
 * @type {number}
 */
export
const pt_mink_config_ac_err_count: ParameterType = ParameterType_pt_mink_config_ac_err_count; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_line_count
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_line_count: ParameterType = 7414; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_line_count
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_line_count: ParameterType = ParameterType_pt_mink_config_cfg_line_count; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_path
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_item_path: ParameterType = 7415; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_path
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_item_path: ParameterType = ParameterType_pt_mink_config_cfg_item_path; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_notify
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_item_notify: ParameterType = 7416; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_notify
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_item_notify: ParameterType = ParameterType_pt_mink_config_cfg_item_notify; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_count
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_item_count: ParameterType = 7417; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_count
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_item_count: ParameterType = ParameterType_pt_mink_config_cfg_item_count; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_replication_line
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_replication_line: ParameterType = 7418; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_replication_line
 * @constant
 * @type {number}
 */
export
const pt_mink_config_replication_line: ParameterType = ParameterType_pt_mink_config_replication_line; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_sms_status
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_sms_status: ParameterType = 7500; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_sms_status
 * @constant
 * @type {number}
 */
export
const pt_mink_sms_status: ParameterType = ParameterType_pt_mink_sms_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_sms_uuid
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_sms_uuid: ParameterType = 7501; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_sms_uuid
 * @constant
 * @type {number}
 */
export
const pt_mink_sms_uuid: ParameterType = ParameterType_pt_mink_sms_uuid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_result
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_filter_result: ParameterType = 7600; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_result
 * @constant
 * @type {number}
 */
export
const pt_mink_filter_result: ParameterType = ParameterType_pt_mink_filter_result; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_exit
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_filter_exit: ParameterType = 7601; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_exit
 * @constant
 * @type {number}
 */
export
const pt_mink_filter_exit: ParameterType = ParameterType_pt_mink_filter_exit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_list_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_filter_list_id: ParameterType = 7602; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_list_id
 * @constant
 * @type {number}
 */
export
const pt_mink_filter_list_id: ParameterType = ParameterType_pt_mink_filter_list_id; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_list_label
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_filter_list_label: ParameterType = 7603; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_list_label
 * @constant
 * @type {number}
 */
export
const pt_mink_filter_list_label: ParameterType = ParameterType_pt_mink_filter_list_label; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_data
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_filter_data: ParameterType = 7604; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_data
 * @constant
 * @type {number}
 */
export
const pt_mink_filter_data: ParameterType = ParameterType_pt_mink_filter_data; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_data_size
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_filter_data_size: ParameterType = 7605; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_data_size
 * @constant
 * @type {number}
 */
export
const pt_mink_filter_data_size: ParameterType = ParameterType_pt_mink_filter_data_size; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_eth_destination_mac
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_eth_destination_mac: ParameterType = 600; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_eth_destination_mac
 * @constant
 * @type {number}
 */
export
const pt_eth_destination_mac: ParameterType = ParameterType_pt_eth_destination_mac; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_eth_source_mac
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_eth_source_mac: ParameterType = 601; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_eth_source_mac
 * @constant
 * @type {number}
 */
export
const pt_eth_source_mac: ParameterType = ParameterType_pt_eth_source_mac; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_ip_destination_ip
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_ip_destination_ip: ParameterType = 700; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_ip_destination_ip
 * @constant
 * @type {number}
 */
export
const pt_ip_destination_ip: ParameterType = ParameterType_pt_ip_destination_ip; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_ip_source_ip
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_ip_source_ip: ParameterType = 701; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_ip_source_ip
 * @constant
 * @type {number}
 */
export
const pt_ip_source_ip: ParameterType = ParameterType_pt_ip_source_ip; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcp_destination_port
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcp_destination_port: ParameterType = 800; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcp_destination_port
 * @constant
 * @type {number}
 */
export
const pt_tcp_destination_port: ParameterType = ParameterType_pt_tcp_destination_port; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcp_source_port
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcp_source_port: ParameterType = 801; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcp_source_port
 * @constant
 * @type {number}
 */
export
const pt_tcp_source_port: ParameterType = ParameterType_pt_tcp_source_port; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_udp_destination_port
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_udp_destination_port: ParameterType = 900; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_udp_destination_port
 * @constant
 * @type {number}
 */
export
const pt_udp_destination_port: ParameterType = ParameterType_pt_udp_destination_port; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_udp_source_port
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_udp_source_port: ParameterType = 901; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_udp_source_port
 * @constant
 * @type {number}
 */
export
const pt_udp_source_port: ParameterType = ParameterType_pt_udp_source_port; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sctp_destination_port
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sctp_destination_port: ParameterType = 1000; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sctp_destination_port
 * @constant
 * @type {number}
 */
export
const pt_sctp_destination_port: ParameterType = ParameterType_pt_sctp_destination_port; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sctp_source_port
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sctp_source_port: ParameterType = 1001; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sctp_source_port
 * @constant
 * @type {number}
 */
export
const pt_sctp_source_port: ParameterType = ParameterType_pt_sctp_source_port; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scoa_digits
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_scoa_digits: ParameterType = 500; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scoa_digits
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_scoa_digits: ParameterType = ParameterType_pt_gsmmap_scoa_digits; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scoa_type_of_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_scoa_type_of_number: ParameterType = 501; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scoa_type_of_number
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_scoa_type_of_number: ParameterType = ParameterType_pt_gsmmap_scoa_type_of_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scoa_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_scoa_numbering_plan: ParameterType = 502; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scoa_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_scoa_numbering_plan: ParameterType = ParameterType_pt_gsmmap_scoa_numbering_plan; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scda_digits
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_scda_digits: ParameterType = 503; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scda_digits
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_scda_digits: ParameterType = ParameterType_pt_gsmmap_scda_digits; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scda_type_of_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_scda_type_of_number: ParameterType = 504; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scda_type_of_number
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_scda_type_of_number: ParameterType = ParameterType_pt_gsmmap_scda_type_of_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scda_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_scda_numbering_plan: ParameterType = 505; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scda_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_scda_numbering_plan: ParameterType = ParameterType_pt_gsmmap_scda_numbering_plan; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_imsi
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_imsi: ParameterType = 506; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_imsi
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_imsi: ParameterType = ParameterType_pt_gsmmap_imsi; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_msisdn_digits
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_msisdn_digits: ParameterType = 507; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_msisdn_digits
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_msisdn_digits: ParameterType = ParameterType_pt_gsmmap_msisdn_digits; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_msisdn_type_of_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_msisdn_type_of_number: ParameterType = 508; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_msisdn_type_of_number
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_msisdn_type_of_number: ParameterType = ParameterType_pt_gsmmap_msisdn_type_of_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_msisdn_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_msisdn_numbering_plan: ParameterType = 509; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_msisdn_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_msisdn_numbering_plan: ParameterType = ParameterType_pt_gsmmap_msisdn_numbering_plan; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_source_transaction_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_source_transaction_id: ParameterType = 510; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_source_transaction_id
 * @constant
 * @type {number}
 */
export
const pt_tcap_source_transaction_id: ParameterType = ParameterType_pt_tcap_source_transaction_id; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_destination_transaction_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_destination_transaction_id: ParameterType = 511; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_destination_transaction_id
 * @constant
 * @type {number}
 */
export
const pt_tcap_destination_transaction_id: ParameterType = ParameterType_pt_tcap_destination_transaction_id; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_opcode
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_opcode: ParameterType = 512; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_opcode
 * @constant
 * @type {number}
 */
export
const pt_tcap_opcode: ParameterType = ParameterType_pt_tcap_opcode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_component_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_component_type: ParameterType = 513; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_component_type
 * @constant
 * @type {number}
 */
export
const pt_tcap_component_type: ParameterType = ParameterType_pt_tcap_component_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_component_invoke_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_component_invoke_id: ParameterType = 514; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_component_invoke_id
 * @constant
 * @type {number}
 */
export
const pt_tcap_component_invoke_id: ParameterType = ParameterType_pt_tcap_component_invoke_id; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_error_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_error_type: ParameterType = 515; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_error_type
 * @constant
 * @type {number}
 */
export
const pt_tcap_error_type: ParameterType = ParameterType_pt_tcap_error_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_error_code
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_error_code: ParameterType = 516; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_error_code
 * @constant
 * @type {number}
 */
export
const pt_tcap_error_code: ParameterType = ParameterType_pt_tcap_error_code; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_dialogue_context_oid
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_dialogue_context_oid: ParameterType = 517; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_dialogue_context_oid
 * @constant
 * @type {number}
 */
export
const pt_tcap_dialogue_context_oid: ParameterType = ParameterType_pt_tcap_dialogue_context_oid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_message_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_message_type: ParameterType = 518; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_message_type
 * @constant
 * @type {number}
 */
export
const pt_tcap_message_type: ParameterType = ParameterType_pt_tcap_message_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_nnn_digits
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_nnn_digits: ParameterType = 519; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_nnn_digits
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_nnn_digits: ParameterType = ParameterType_pt_gsmmap_nnn_digits; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_nnn_type_of_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_nnn_type_of_number: ParameterType = 520; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_nnn_type_of_number
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_nnn_type_of_number: ParameterType = ParameterType_pt_gsmmap_nnn_type_of_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_nnn_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_nnn_numbering_plan: ParameterType = 521; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_nnn_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_nnn_numbering_plan: ParameterType = ParameterType_pt_gsmmap_nnn_numbering_plan; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_an_digits
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_an_digits: ParameterType = 522; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_an_digits
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_an_digits: ParameterType = ParameterType_pt_gsmmap_an_digits; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_an_type_of_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_an_type_of_number: ParameterType = 523; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_an_type_of_number
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_an_type_of_number: ParameterType = ParameterType_pt_gsmmap_an_type_of_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_an_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_an_numbering_plan: ParameterType = 524; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_an_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_an_numbering_plan: ParameterType = ParameterType_pt_gsmmap_an_numbering_plan; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_sca_digits
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_sca_digits: ParameterType = 525; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_sca_digits
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_sca_digits: ParameterType = ParameterType_pt_gsmmap_sca_digits; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_sca_type_of_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_sca_type_of_number: ParameterType = 526; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_sca_type_of_number
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_sca_type_of_number: ParameterType = ParameterType_pt_gsmmap_sca_type_of_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_sca_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_sca_numbering_plan: ParameterType = 527; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_sca_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_sca_numbering_plan: ParameterType = ParameterType_pt_gsmmap_sca_numbering_plan; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_component_count
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_component_count: ParameterType = 528; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_component_count
 * @constant
 * @type {number}
 */
export
const pt_tcap_component_count: ParameterType = ParameterType_pt_tcap_component_count; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_dialogue_context_supported
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_dialogue_context_supported: ParameterType = 529; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_dialogue_context_supported
 * @constant
 * @type {number}
 */
export
const pt_tcap_dialogue_context_supported: ParameterType = ParameterType_pt_tcap_dialogue_context_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_component_index
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_component_index: ParameterType = 530; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_component_index
 * @constant
 * @type {number}
 */
export
const pt_tcap_component_index: ParameterType = ParameterType_pt_tcap_component_index; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_source_transaction_id_length
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_source_transaction_id_length: ParameterType = 531; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_source_transaction_id_length
 * @constant
 * @type {number}
 */
export
const pt_tcap_source_transaction_id_length: ParameterType = ParameterType_pt_tcap_source_transaction_id_length; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_destination_transaction_id_length
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_destination_transaction_id_length: ParameterType = 532; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_destination_transaction_id_length
 * @constant
 * @type {number}
 */
export
const pt_tcap_destination_transaction_id_length: ParameterType = ParameterType_pt_tcap_destination_transaction_id_length; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_version
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_version: ParameterType = 533; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_version
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_version: ParameterType = ParameterType_pt_gsmmap_version; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_udhi
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_udhi: ParameterType = 400; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_udhi
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_udhi: ParameterType = ParameterType_pt_smstpdu_tp_udhi; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_sri
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_sri: ParameterType = 401; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_sri
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_sri: ParameterType = ParameterType_pt_smstpdu_tp_sri; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_mms
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_mms: ParameterType = 402; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_mms
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_mms: ParameterType = ParameterType_pt_smstpdu_tp_mms; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_mti
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_mti: ParameterType = 403; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_mti
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_mti: ParameterType = ParameterType_pt_smstpdu_tp_mti; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_oa_type_of_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_oa_type_of_number: ParameterType = 404; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_oa_type_of_number
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_oa_type_of_number: ParameterType = ParameterType_pt_smstpdu_tp_oa_type_of_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_oa_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_oa_numbering_plan: ParameterType = 405; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_oa_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_oa_numbering_plan: ParameterType = ParameterType_pt_smstpdu_tp_oa_numbering_plan; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_oa_digits
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_oa_digits: ParameterType = 406; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_oa_digits
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_oa_digits: ParameterType = ParameterType_pt_smstpdu_tp_oa_digits; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_pid
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_pid: ParameterType = 407; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_pid
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_pid: ParameterType = ParameterType_pt_smstpdu_tp_pid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_dcs
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_dcs: ParameterType = 408; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_dcs
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_dcs: ParameterType = ParameterType_pt_smstpdu_tp_dcs; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_scts
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_scts: ParameterType = 409; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_scts
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_scts: ParameterType = ParameterType_pt_smstpdu_tp_scts; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_udl
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_udl: ParameterType = 410; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_udl
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_udl: ParameterType = ParameterType_pt_smstpdu_tp_udl; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_ud
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_ud: ParameterType = 411; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_ud
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_ud: ParameterType = ParameterType_pt_smstpdu_tp_ud; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_rp
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_rp: ParameterType = 412; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_rp
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_rp: ParameterType = ParameterType_pt_smstpdu_tp_rp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_srr
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_srr: ParameterType = 413; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_srr
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_srr: ParameterType = ParameterType_pt_smstpdu_tp_srr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_vpf
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_vpf: ParameterType = 414; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_vpf
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_vpf: ParameterType = ParameterType_pt_smstpdu_tp_vpf; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_rd
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_rd: ParameterType = 415; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_rd
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_rd: ParameterType = ParameterType_pt_smstpdu_tp_rd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_da_type_of_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_da_type_of_number: ParameterType = 416; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_da_type_of_number
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_da_type_of_number: ParameterType = ParameterType_pt_smstpdu_tp_da_type_of_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_da_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_da_numbering_plan: ParameterType = 417; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_da_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_da_numbering_plan: ParameterType = ParameterType_pt_smstpdu_tp_da_numbering_plan; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_da_digits
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_da_digits: ParameterType = 418; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_da_digits
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_da_digits: ParameterType = ParameterType_pt_smstpdu_tp_da_digits; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_vp
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_vp: ParameterType = 419; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_vp
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_vp: ParameterType = ParameterType_pt_smstpdu_tp_vp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_msg_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_msg_id: ParameterType = 420; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_msg_id
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_msg_id: ParameterType = ParameterType_pt_smstpdu_msg_id; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_msg_parts
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_msg_parts: ParameterType = 421; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_msg_parts
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_msg_parts: ParameterType = ParameterType_pt_smstpdu_msg_parts; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_msg_part
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_msg_part: ParameterType = 422; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_msg_part
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_msg_part: ParameterType = ParameterType_pt_smstpdu_msg_part; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_mr
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_mr: ParameterType = 423; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_mr
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_mr: ParameterType = ParameterType_pt_smstpdu_tp_mr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_message_class
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_message_class: ParameterType = 424; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_message_class
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_message_class: ParameterType = ParameterType_pt_smstpdu_message_class; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_destination_local_reference
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_destination_local_reference: ParameterType = 300; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_destination_local_reference
 * @constant
 * @type {number}
 */
export
const pt_sccp_destination_local_reference: ParameterType = ParameterType_pt_sccp_destination_local_reference; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_source_local_reference
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_source_local_reference: ParameterType = 301; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_source_local_reference
 * @constant
 * @type {number}
 */
export
const pt_sccp_source_local_reference: ParameterType = ParameterType_pt_sccp_source_local_reference; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_party
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_party: ParameterType = 302; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_party
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_party: ParameterType = ParameterType_pt_sccp_called_party; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_party
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_party: ParameterType = 303; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_party
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_party: ParameterType = ParameterType_pt_sccp_calling_party; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_protocol_class
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_protocol_class: ParameterType = 304; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_protocol_class
 * @constant
 * @type {number}
 */
export
const pt_sccp_protocol_class: ParameterType = ParameterType_pt_sccp_protocol_class; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_segmenting_reassembling
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_segmenting_reassembling: ParameterType = 305; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_segmenting_reassembling
 * @constant
 * @type {number}
 */
export
const pt_sccp_segmenting_reassembling: ParameterType = ParameterType_pt_sccp_segmenting_reassembling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_receive_sequence_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_receive_sequence_number: ParameterType = 306; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_receive_sequence_number
 * @constant
 * @type {number}
 */
export
const pt_sccp_receive_sequence_number: ParameterType = ParameterType_pt_sccp_receive_sequence_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_sequencing_segmenting
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_sequencing_segmenting: ParameterType = 307; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_sequencing_segmenting
 * @constant
 * @type {number}
 */
export
const pt_sccp_sequencing_segmenting: ParameterType = ParameterType_pt_sccp_sequencing_segmenting; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_credit
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_credit: ParameterType = 308; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_credit
 * @constant
 * @type {number}
 */
export
const pt_sccp_credit: ParameterType = ParameterType_pt_sccp_credit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_release_cause
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_release_cause: ParameterType = 309; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_release_cause
 * @constant
 * @type {number}
 */
export
const pt_sccp_release_cause: ParameterType = ParameterType_pt_sccp_release_cause; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_return_cause
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_return_cause: ParameterType = 310; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_return_cause
 * @constant
 * @type {number}
 */
export
const pt_sccp_return_cause: ParameterType = ParameterType_pt_sccp_return_cause; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_reset_cause
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_reset_cause: ParameterType = 311; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_reset_cause
 * @constant
 * @type {number}
 */
export
const pt_sccp_reset_cause: ParameterType = ParameterType_pt_sccp_reset_cause; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_error_cause
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_error_cause: ParameterType = 312; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_error_cause
 * @constant
 * @type {number}
 */
export
const pt_sccp_error_cause: ParameterType = ParameterType_pt_sccp_error_cause; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_refusal_cause
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_refusal_cause: ParameterType = 313; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_refusal_cause
 * @constant
 * @type {number}
 */
export
const pt_sccp_refusal_cause: ParameterType = ParameterType_pt_sccp_refusal_cause; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_data
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_data: ParameterType = 314; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_data
 * @constant
 * @type {number}
 */
export
const pt_sccp_data: ParameterType = ParameterType_pt_sccp_data; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_segmentation
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_segmentation: ParameterType = 315; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_segmentation
 * @constant
 * @type {number}
 */
export
const pt_sccp_segmentation: ParameterType = ParameterType_pt_sccp_segmentation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_hop_counter
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_hop_counter: ParameterType = 316; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_hop_counter
 * @constant
 * @type {number}
 */
export
const pt_sccp_hop_counter: ParameterType = ParameterType_pt_sccp_hop_counter; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_importance
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_importance: ParameterType = 317; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_importance
 * @constant
 * @type {number}
 */
export
const pt_sccp_importance: ParameterType = ParameterType_pt_sccp_importance; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_long_data
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_long_data: ParameterType = 318; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_long_data
 * @constant
 * @type {number}
 */
export
const pt_sccp_long_data: ParameterType = ParameterType_pt_sccp_long_data; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_routing_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_routing_indicator: ParameterType = 319; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_routing_indicator
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_routing_indicator: ParameterType = ParameterType_pt_sccp_called_pa_routing_indicator; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_global_title_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_global_title_indicator: ParameterType = 320; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_global_title_indicator
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_global_title_indicator: ParameterType = ParameterType_pt_sccp_called_pa_global_title_indicator; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_ssn_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_ssn_indicator: ParameterType = 321; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_ssn_indicator
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_ssn_indicator: ParameterType = ParameterType_pt_sccp_called_pa_ssn_indicator; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_point_code_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_point_code_indicator: ParameterType = 322; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_point_code_indicator
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_point_code_indicator: ParameterType = ParameterType_pt_sccp_called_pa_point_code_indicator; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_point_code_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_point_code_number: ParameterType = 323; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_point_code_number
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_point_code_number: ParameterType = ParameterType_pt_sccp_called_pa_point_code_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_subsystem_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_subsystem_number: ParameterType = 324; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_subsystem_number
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_subsystem_number: ParameterType = ParameterType_pt_sccp_called_pa_subsystem_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_gt_numbering_plan: ParameterType = 325; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_gt_numbering_plan: ParameterType = ParameterType_pt_sccp_called_pa_gt_numbering_plan; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_encoding_scheme
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_gt_encoding_scheme: ParameterType = 326; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_encoding_scheme
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_gt_encoding_scheme: ParameterType = ParameterType_pt_sccp_called_pa_gt_encoding_scheme; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_nature_of_address
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_gt_nature_of_address: ParameterType = 327; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_nature_of_address
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_gt_nature_of_address: ParameterType = ParameterType_pt_sccp_called_pa_gt_nature_of_address; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_address
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_gt_address: ParameterType = 328; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_address
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_gt_address: ParameterType = ParameterType_pt_sccp_called_pa_gt_address; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_translation_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_gt_translation_type: ParameterType = 329; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_translation_type
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_gt_translation_type: ParameterType = ParameterType_pt_sccp_called_pa_gt_translation_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_routing_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_routing_indicator: ParameterType = 330; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_routing_indicator
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_routing_indicator: ParameterType = ParameterType_pt_sccp_calling_pa_routing_indicator; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_global_title_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_global_title_indicator: ParameterType = 331; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_global_title_indicator
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_global_title_indicator: ParameterType = ParameterType_pt_sccp_calling_pa_global_title_indicator; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_ssn_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_ssn_indicator: ParameterType = 332; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_ssn_indicator
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_ssn_indicator: ParameterType = ParameterType_pt_sccp_calling_pa_ssn_indicator; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_point_code_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_point_code_indicator: ParameterType = 333; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_point_code_indicator
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_point_code_indicator: ParameterType = ParameterType_pt_sccp_calling_pa_point_code_indicator; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_point_code_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_point_code_number: ParameterType = 334; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_point_code_number
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_point_code_number: ParameterType = ParameterType_pt_sccp_calling_pa_point_code_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_subsystem_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_subsystem_number: ParameterType = 335; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_subsystem_number
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_subsystem_number: ParameterType = ParameterType_pt_sccp_calling_pa_subsystem_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_gt_numbering_plan: ParameterType = 336; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_gt_numbering_plan: ParameterType = ParameterType_pt_sccp_calling_pa_gt_numbering_plan; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_encoding_scheme
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_gt_encoding_scheme: ParameterType = 337; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_encoding_scheme
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_gt_encoding_scheme: ParameterType = ParameterType_pt_sccp_calling_pa_gt_encoding_scheme; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_nature_of_address
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_gt_nature_of_address: ParameterType = 338; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_nature_of_address
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_gt_nature_of_address: ParameterType = ParameterType_pt_sccp_calling_pa_gt_nature_of_address; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_address
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_gt_address: ParameterType = 339; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_address
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_gt_address: ParameterType = ParameterType_pt_sccp_calling_pa_gt_address; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_translation_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_gt_translation_type: ParameterType = 340; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_translation_type
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_gt_translation_type: ParameterType = ParameterType_pt_sccp_calling_pa_gt_translation_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_message_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_message_type: ParameterType = 341; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_message_type
 * @constant
 * @type {number}
 */
export
const pt_sccp_message_type: ParameterType = ParameterType_pt_sccp_message_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_info_string
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_info_string: ParameterType = 200; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_info_string
 * @constant
 * @type {number}
 */
export
const pt_m3ua_info_string: ParameterType = ParameterType_pt_m3ua_info_string; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_routing_context
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_routing_context: ParameterType = 201; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_routing_context
 * @constant
 * @type {number}
 */
export
const pt_m3ua_routing_context: ParameterType = ParameterType_pt_m3ua_routing_context; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_diagnostic_info
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_diagnostic_info: ParameterType = 202; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_diagnostic_info
 * @constant
 * @type {number}
 */
export
const pt_m3ua_diagnostic_info: ParameterType = ParameterType_pt_m3ua_diagnostic_info; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_heartbeat
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_heartbeat: ParameterType = 203; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_heartbeat
 * @constant
 * @type {number}
 */
export
const pt_m3ua_heartbeat: ParameterType = ParameterType_pt_m3ua_heartbeat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_traffic_mode_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_traffic_mode_type: ParameterType = 204; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_traffic_mode_type
 * @constant
 * @type {number}
 */
export
const pt_m3ua_traffic_mode_type: ParameterType = ParameterType_pt_m3ua_traffic_mode_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_error_code
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_error_code: ParameterType = 205; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_error_code
 * @constant
 * @type {number}
 */
export
const pt_m3ua_error_code: ParameterType = ParameterType_pt_m3ua_error_code; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_status
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_status: ParameterType = 206; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_status
 * @constant
 * @type {number}
 */
export
const pt_m3ua_status: ParameterType = ParameterType_pt_m3ua_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_asp_identifier
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_asp_identifier: ParameterType = 207; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_asp_identifier
 * @constant
 * @type {number}
 */
export
const pt_m3ua_asp_identifier: ParameterType = ParameterType_pt_m3ua_asp_identifier; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_affected_point_code
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_affected_point_code: ParameterType = 208; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_affected_point_code
 * @constant
 * @type {number}
 */
export
const pt_m3ua_affected_point_code: ParameterType = ParameterType_pt_m3ua_affected_point_code; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_correlation_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_correlation_id: ParameterType = 209; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_correlation_id
 * @constant
 * @type {number}
 */
export
const pt_m3ua_correlation_id: ParameterType = ParameterType_pt_m3ua_correlation_id; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_network_appearance
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_network_appearance: ParameterType = 210; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_network_appearance
 * @constant
 * @type {number}
 */
export
const pt_m3ua_network_appearance: ParameterType = ParameterType_pt_m3ua_network_appearance; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_user_cause
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_user_cause: ParameterType = 211; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_user_cause
 * @constant
 * @type {number}
 */
export
const pt_m3ua_user_cause: ParameterType = ParameterType_pt_m3ua_user_cause; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_congestion_indications
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_congestion_indications: ParameterType = 212; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_congestion_indications
 * @constant
 * @type {number}
 */
export
const pt_m3ua_congestion_indications: ParameterType = ParameterType_pt_m3ua_congestion_indications; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_concerned_destination
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_concerned_destination: ParameterType = 213; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_concerned_destination
 * @constant
 * @type {number}
 */
export
const pt_m3ua_concerned_destination: ParameterType = ParameterType_pt_m3ua_concerned_destination; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_routing_key
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_routing_key: ParameterType = 214; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_routing_key
 * @constant
 * @type {number}
 */
export
const pt_m3ua_routing_key: ParameterType = ParameterType_pt_m3ua_routing_key; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_registration_result
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_registration_result: ParameterType = 215; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_registration_result
 * @constant
 * @type {number}
 */
export
const pt_m3ua_registration_result: ParameterType = ParameterType_pt_m3ua_registration_result; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_deregistration_result
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_deregistration_result: ParameterType = 216; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_deregistration_result
 * @constant
 * @type {number}
 */
export
const pt_m3ua_deregistration_result: ParameterType = ParameterType_pt_m3ua_deregistration_result; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_local_routing_key_identifier
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_local_routing_key_identifier: ParameterType = 217; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_local_routing_key_identifier
 * @constant
 * @type {number}
 */
export
const pt_m3ua_local_routing_key_identifier: ParameterType = ParameterType_pt_m3ua_local_routing_key_identifier; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_destination_point_code
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_destination_point_code: ParameterType = 218; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_destination_point_code
 * @constant
 * @type {number}
 */
export
const pt_m3ua_destination_point_code: ParameterType = ParameterType_pt_m3ua_destination_point_code; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_service_indicators
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_service_indicators: ParameterType = 219; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_service_indicators
 * @constant
 * @type {number}
 */
export
const pt_m3ua_service_indicators: ParameterType = ParameterType_pt_m3ua_service_indicators; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_origination_point_code_list
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_origination_point_code_list: ParameterType = 220; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_origination_point_code_list
 * @constant
 * @type {number}
 */
export
const pt_m3ua_origination_point_code_list: ParameterType = ParameterType_pt_m3ua_origination_point_code_list; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_circuit_range
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_circuit_range: ParameterType = 221; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_circuit_range
 * @constant
 * @type {number}
 */
export
const pt_m3ua_circuit_range: ParameterType = ParameterType_pt_m3ua_circuit_range; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_protocol_data: ParameterType = 222; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data
 * @constant
 * @type {number}
 */
export
const pt_m3ua_protocol_data: ParameterType = ParameterType_pt_m3ua_protocol_data; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_service_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_protocol_data_service_indicator: ParameterType = 223; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_service_indicator
 * @constant
 * @type {number}
 */
export
const pt_m3ua_protocol_data_service_indicator: ParameterType = ParameterType_pt_m3ua_protocol_data_service_indicator; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_network_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_protocol_data_network_indicator: ParameterType = 224; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_network_indicator
 * @constant
 * @type {number}
 */
export
const pt_m3ua_protocol_data_network_indicator: ParameterType = ParameterType_pt_m3ua_protocol_data_network_indicator; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_message_priority
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_protocol_data_message_priority: ParameterType = 225; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_message_priority
 * @constant
 * @type {number}
 */
export
const pt_m3ua_protocol_data_message_priority: ParameterType = ParameterType_pt_m3ua_protocol_data_message_priority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_destination_point_code
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_protocol_data_destination_point_code: ParameterType = 226; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_destination_point_code
 * @constant
 * @type {number}
 */
export
const pt_m3ua_protocol_data_destination_point_code: ParameterType = ParameterType_pt_m3ua_protocol_data_destination_point_code; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_originating_point_code
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_protocol_data_originating_point_code: ParameterType = 227; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_originating_point_code
 * @constant
 * @type {number}
 */
export
const pt_m3ua_protocol_data_originating_point_code: ParameterType = ParameterType_pt_m3ua_protocol_data_originating_point_code; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_signalling_link_selection_code
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_protocol_data_signalling_link_selection_code: ParameterType = 228; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_signalling_link_selection_code
 * @constant
 * @type {number}
 */
export
const pt_m3ua_protocol_data_signalling_link_selection_code: ParameterType = ParameterType_pt_m3ua_protocol_data_signalling_link_selection_code; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_registration_status
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_registration_status: ParameterType = 229; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_registration_status
 * @constant
 * @type {number}
 */
export
const pt_m3ua_registration_status: ParameterType = ParameterType_pt_m3ua_registration_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_deregistration_status
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_deregistration_status: ParameterType = 230; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_deregistration_status
 * @constant
 * @type {number}
 */
export
const pt_m3ua_deregistration_status: ParameterType = ParameterType_pt_m3ua_deregistration_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_header_data
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_header_data: ParameterType = 231; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_header_data
 * @constant
 * @type {number}
 */
export
const pt_m3ua_header_data: ParameterType = ParameterType_pt_m3ua_header_data; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_as_label
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_as_label: ParameterType = 232; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_as_label
 * @constant
 * @type {number}
 */
export
const pt_m3ua_as_label: ParameterType = ParameterType_pt_m3ua_as_label; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_asp_label
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_asp_label: ParameterType = 233; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_asp_label
 * @constant
 * @type {number}
 */
export
const pt_m3ua_asp_label: ParameterType = ParameterType_pt_m3ua_asp_label; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ParameterType: $.ASN1Decoder<ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterType (el: _Element): ParameterType {
    if (!_cached_decoder_for_ParameterType) { _cached_decoder_for_ParameterType = $._decodeInteger; }
    return _cached_decoder_for_ParameterType(el);
}

let _cached_encoder_for_ParameterType: $.ASN1Encoder<ParameterType> | null = null;

/**
 * @summary Encodes a(n) ParameterType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterType, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterType (value: ParameterType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterType) { _cached_encoder_for_ParameterType = $._encodeInteger; }
    return _cached_encoder_for_ParameterType(value, elGetter);
}


/* eslint-enable */
