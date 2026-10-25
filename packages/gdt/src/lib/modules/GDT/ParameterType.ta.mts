/* eslint-disable */
import {
    type INTEGER
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
const ParameterType_pt_mink_daemon_type = 6000 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_daemon_type
 * @constant
 * @type {number}
 */
export
const pt_mink_daemon_type = ParameterType_pt_mink_daemon_type satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_daemon_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_daemon_id = 6001 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_daemon_id
 * @constant
 * @type {number}
 */
export
const pt_mink_daemon_id = ParameterType_pt_mink_daemon_id satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_auth_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_auth_id = 6002 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_auth_id
 * @constant
 * @type {number}
 */
export
const pt_mink_auth_id = ParameterType_pt_mink_auth_id satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_auth_password
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_auth_password = 6003 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_auth_password
 * @constant
 * @type {number}
 */
export
const pt_mink_auth_password = ParameterType_pt_mink_auth_password satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_daemon_ip
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_daemon_ip = 6004 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_daemon_ip
 * @constant
 * @type {number}
 */
export
const pt_mink_daemon_ip = ParameterType_pt_mink_daemon_ip satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_daemon_port
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_daemon_port = 6005 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_daemon_port
 * @constant
 * @type {number}
 */
export
const pt_mink_daemon_port = ParameterType_pt_mink_daemon_port satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_daemon_description
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_daemon_description = 6006 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_daemon_description
 * @constant
 * @type {number}
 */
export
const pt_mink_daemon_description = ParameterType_pt_mink_daemon_description satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_action
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_action = 6007 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_action
 * @constant
 * @type {number}
 */
export
const pt_mink_action = ParameterType_pt_mink_action satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_dpi
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_dpi = 6008 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_dpi
 * @constant
 * @type {number}
 */
export
const pt_mink_dpi = ParameterType_pt_mink_dpi satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_spi
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_spi = 6009 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_spi
 * @constant
 * @type {number}
 */
export
const pt_mink_spi = ParameterType_pt_mink_spi satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_timestamp
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_timestamp = 6010 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_timestamp
 * @constant
 * @type {number}
 */
export
const pt_mink_timestamp = ParameterType_pt_mink_timestamp satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_timestamp_nsec
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_timestamp_nsec = 6011 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_timestamp_nsec
 * @constant
 * @type {number}
 */
export
const pt_mink_timestamp_nsec = ParameterType_pt_mink_timestamp_nsec satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_security_phase
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_security_phase = 6012 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_security_phase
 * @constant
 * @type {number}
 */
export
const pt_mink_security_phase = ParameterType_pt_mink_security_phase satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_loop_count
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_loop_count = 6013 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_loop_count
 * @constant
 * @type {number}
 */
export
const pt_mink_loop_count = ParameterType_pt_mink_loop_count satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_checksum
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_checksum = 6014 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_checksum
 * @constant
 * @type {number}
 */
export
const pt_mink_checksum = ParameterType_pt_mink_checksum satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_timeout
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_timeout = 6015 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_timeout
 * @constant
 * @type {number}
 */
export
const pt_mink_timeout = ParameterType_pt_mink_timeout satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_error
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_error = 6016 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_error
 * @constant
 * @type {number}
 */
export
const pt_mink_error = ParameterType_pt_mink_error satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_error_msg
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_error_msg = 6017 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_error_msg
 * @constant
 * @type {number}
 */
export
const pt_mink_error_msg = ParameterType_pt_mink_error_msg satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_status
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_status = 6018 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_status
 * @constant
 * @type {number}
 */
export
const pt_mink_status = ParameterType_pt_mink_status satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_status_msg
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_status_msg = 6019 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_status_msg
 * @constant
 * @type {number}
 */
export
const pt_mink_status_msg = ParameterType_pt_mink_status_msg satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_persistent_correlation
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_persistent_correlation = 6020 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_persistent_correlation
 * @constant
 * @type {number}
 */
export
const pt_mink_persistent_correlation = ParameterType_pt_mink_persistent_correlation satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_destination
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_destination = 6100 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_destination
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_destination = ParameterType_pt_mink_routing_destination satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_source
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_source = 6101 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_source
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_source = ParameterType_pt_mink_routing_source satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_gateway
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_gateway = 6102 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_gateway
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_gateway = ParameterType_pt_mink_routing_gateway satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_interface
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_interface = 6103 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_interface
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_interface = ParameterType_pt_mink_routing_interface satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_priority
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_priority = 6104 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_priority
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_priority = ParameterType_pt_mink_routing_priority satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_router_status
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_router_status = 6105 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_router_status
 * @constant
 * @type {number}
 */
export
const pt_mink_router_status = ParameterType_pt_mink_router_status satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_destination_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_destination_type = 6106 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_destination_type
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_destination_type = ParameterType_pt_mink_routing_destination_type satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_index
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_index = 6107 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_index
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_index = ParameterType_pt_mink_routing_index satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_trunk_label
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_trunk_label = 6108 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_trunk_label
 * @constant
 * @type {number}
 */
export
const pt_mink_trunk_label = ParameterType_pt_mink_trunk_label satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_connection_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_connection_type = 6109 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_connection_type
 * @constant
 * @type {number}
 */
export
const pt_mink_connection_type = ParameterType_pt_mink_connection_type satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_service_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_service_id = 6110 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_service_id
 * @constant
 * @type {number}
 */
export
const pt_mink_service_id = ParameterType_pt_mink_service_id satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_command_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_command_id = 6111 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_command_id
 * @constant
 * @type {number}
 */
export
const pt_mink_command_id = ParameterType_pt_mink_command_id satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_sub_destination
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_sub_destination = 6112 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_sub_destination
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_sub_destination = ParameterType_pt_mink_routing_sub_destination satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_sub_destination_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_sub_destination_type = 6113 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_sub_destination_type
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_sub_destination_type = ParameterType_pt_mink_routing_sub_destination_type satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_correlation_notification
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_correlation_notification = 6114 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_correlation_notification
 * @constant
 * @type {number}
 */
export
const pt_mink_correlation_notification = ParameterType_pt_mink_correlation_notification satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_guid
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_guid = 6115 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_guid
 * @constant
 * @type {number}
 */
export
const pt_mink_guid = ParameterType_pt_mink_guid satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_service_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_routing_service_id = 6116 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_routing_service_id
 * @constant
 * @type {number}
 */
export
const pt_mink_routing_service_id = ParameterType_pt_mink_routing_service_id satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_event_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_event_id = 6200 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_event_id
 * @constant
 * @type {number}
 */
export
const pt_mink_event_id = ParameterType_pt_mink_event_id satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_event_description
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_event_description = 6201 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_event_description
 * @constant
 * @type {number}
 */
export
const pt_mink_event_description = ParameterType_pt_mink_event_description satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_event_callback_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_event_callback_id = 6202 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_event_callback_id
 * @constant
 * @type {number}
 */
export
const pt_mink_event_callback_id = ParameterType_pt_mink_event_callback_id satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_event_callback_priority
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_event_callback_priority = 6203 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_event_callback_priority
 * @constant
 * @type {number}
 */
export
const pt_mink_event_callback_priority = ParameterType_pt_mink_event_callback_priority satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_enc_public_key
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_enc_public_key = 6300 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_enc_public_key
 * @constant
 * @type {number}
 */
export
const pt_mink_enc_public_key = ParameterType_pt_mink_enc_public_key satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_enc_private_key
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_enc_private_key = 6301 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_enc_private_key
 * @constant
 * @type {number}
 */
export
const pt_mink_enc_private_key = ParameterType_pt_mink_enc_private_key satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_enc_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_enc_type = 6302 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_enc_type
 * @constant
 * @type {number}
 */
export
const pt_mink_enc_type = ParameterType_pt_mink_enc_type satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_stats_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_stats_id = 6400 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_stats_id
 * @constant
 * @type {number}
 */
export
const pt_mink_stats_id = ParameterType_pt_mink_stats_id satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_stats_description
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_stats_description = 6401 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_stats_description
 * @constant
 * @type {number}
 */
export
const pt_mink_stats_description = ParameterType_pt_mink_stats_description satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_stats_value
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_stats_value = 6402 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_stats_value
 * @constant
 * @type {number}
 */
export
const pt_mink_stats_value = ParameterType_pt_mink_stats_value satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_stats_count
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_stats_count = 6403 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_stats_count
 * @constant
 * @type {number}
 */
export
const pt_mink_stats_count = ParameterType_pt_mink_stats_count satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_param_name
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_param_name = 7400 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_param_name
 * @constant
 * @type {number}
 */
export
const pt_mink_config_param_name = ParameterType_pt_mink_config_param_name satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_param_value
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_param_value = 7401 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_param_value
 * @constant
 * @type {number}
 */
export
const pt_mink_config_param_value = ParameterType_pt_mink_config_param_value satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_ac_line
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_ac_line = 7402 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_ac_line
 * @constant
 * @type {number}
 */
export
const pt_mink_config_ac_line = ParameterType_pt_mink_config_ac_line satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_name
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_item_name = 7403 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_name
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_item_name = ParameterType_pt_mink_config_cfg_item_name satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_desc
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_item_desc = 7404 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_desc
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_item_desc = ParameterType_pt_mink_config_cfg_item_desc satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_ns
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_item_ns = 7405 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_ns
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_item_ns = ParameterType_pt_mink_config_cfg_item_ns satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_value
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_item_value = 7406 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_value
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_item_value = ParameterType_pt_mink_config_cfg_item_value satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_nvalue
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_item_nvalue = 7407 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_nvalue
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_item_nvalue = ParameterType_pt_mink_config_cfg_item_nvalue satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_nt
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_item_nt = 7408 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_nt
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_item_nt = ParameterType_pt_mink_config_cfg_item_nt satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_cm_mode
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_cm_mode = 7409 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_cm_mode
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_cm_mode = ParameterType_pt_mink_config_cfg_cm_mode satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_ac_err
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_ac_err = 7410 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_ac_err
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_ac_err = ParameterType_pt_mink_config_cfg_ac_err satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cli_path
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cli_path = 7411 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cli_path
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cli_path = ParameterType_pt_mink_config_cli_path satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_line
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_line = 7412 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_line
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_line = ParameterType_pt_mink_config_cfg_line satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_ac_err_count
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_ac_err_count = 7413 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_ac_err_count
 * @constant
 * @type {number}
 */
export
const pt_mink_config_ac_err_count = ParameterType_pt_mink_config_ac_err_count satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_line_count
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_line_count = 7414 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_line_count
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_line_count = ParameterType_pt_mink_config_cfg_line_count satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_path
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_item_path = 7415 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_path
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_item_path = ParameterType_pt_mink_config_cfg_item_path satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_notify
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_item_notify = 7416 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_notify
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_item_notify = ParameterType_pt_mink_config_cfg_item_notify satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_count
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_cfg_item_count = 7417 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_cfg_item_count
 * @constant
 * @type {number}
 */
export
const pt_mink_config_cfg_item_count = ParameterType_pt_mink_config_cfg_item_count satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_replication_line
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_config_replication_line = 7418 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_config_replication_line
 * @constant
 * @type {number}
 */
export
const pt_mink_config_replication_line = ParameterType_pt_mink_config_replication_line satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_sms_status
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_sms_status = 7500 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_sms_status
 * @constant
 * @type {number}
 */
export
const pt_mink_sms_status = ParameterType_pt_mink_sms_status satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_sms_uuid
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_sms_uuid = 7501 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_sms_uuid
 * @constant
 * @type {number}
 */
export
const pt_mink_sms_uuid = ParameterType_pt_mink_sms_uuid satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_result
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_filter_result = 7600 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_result
 * @constant
 * @type {number}
 */
export
const pt_mink_filter_result = ParameterType_pt_mink_filter_result satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_exit
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_filter_exit = 7601 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_exit
 * @constant
 * @type {number}
 */
export
const pt_mink_filter_exit = ParameterType_pt_mink_filter_exit satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_list_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_filter_list_id = 7602 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_list_id
 * @constant
 * @type {number}
 */
export
const pt_mink_filter_list_id = ParameterType_pt_mink_filter_list_id satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_list_label
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_filter_list_label = 7603 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_list_label
 * @constant
 * @type {number}
 */
export
const pt_mink_filter_list_label = ParameterType_pt_mink_filter_list_label satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_data
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_filter_data = 7604 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_data
 * @constant
 * @type {number}
 */
export
const pt_mink_filter_data = ParameterType_pt_mink_filter_data satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_data_size
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_mink_filter_data_size = 7605 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_mink_filter_data_size
 * @constant
 * @type {number}
 */
export
const pt_mink_filter_data_size = ParameterType_pt_mink_filter_data_size satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_eth_destination_mac
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_eth_destination_mac = 600 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_eth_destination_mac
 * @constant
 * @type {number}
 */
export
const pt_eth_destination_mac = ParameterType_pt_eth_destination_mac satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_eth_source_mac
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_eth_source_mac = 601 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_eth_source_mac
 * @constant
 * @type {number}
 */
export
const pt_eth_source_mac = ParameterType_pt_eth_source_mac satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_ip_destination_ip
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_ip_destination_ip = 700 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_ip_destination_ip
 * @constant
 * @type {number}
 */
export
const pt_ip_destination_ip = ParameterType_pt_ip_destination_ip satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_ip_source_ip
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_ip_source_ip = 701 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_ip_source_ip
 * @constant
 * @type {number}
 */
export
const pt_ip_source_ip = ParameterType_pt_ip_source_ip satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcp_destination_port
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcp_destination_port = 800 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcp_destination_port
 * @constant
 * @type {number}
 */
export
const pt_tcp_destination_port = ParameterType_pt_tcp_destination_port satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcp_source_port
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcp_source_port = 801 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcp_source_port
 * @constant
 * @type {number}
 */
export
const pt_tcp_source_port = ParameterType_pt_tcp_source_port satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_udp_destination_port
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_udp_destination_port = 900 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_udp_destination_port
 * @constant
 * @type {number}
 */
export
const pt_udp_destination_port = ParameterType_pt_udp_destination_port satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_udp_source_port
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_udp_source_port = 901 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_udp_source_port
 * @constant
 * @type {number}
 */
export
const pt_udp_source_port = ParameterType_pt_udp_source_port satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sctp_destination_port
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sctp_destination_port = 1000 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sctp_destination_port
 * @constant
 * @type {number}
 */
export
const pt_sctp_destination_port = ParameterType_pt_sctp_destination_port satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sctp_source_port
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sctp_source_port = 1001 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sctp_source_port
 * @constant
 * @type {number}
 */
export
const pt_sctp_source_port = ParameterType_pt_sctp_source_port satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scoa_digits
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_scoa_digits = 500 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scoa_digits
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_scoa_digits = ParameterType_pt_gsmmap_scoa_digits satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scoa_type_of_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_scoa_type_of_number = 501 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scoa_type_of_number
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_scoa_type_of_number = ParameterType_pt_gsmmap_scoa_type_of_number satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scoa_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_scoa_numbering_plan = 502 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scoa_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_scoa_numbering_plan = ParameterType_pt_gsmmap_scoa_numbering_plan satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scda_digits
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_scda_digits = 503 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scda_digits
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_scda_digits = ParameterType_pt_gsmmap_scda_digits satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scda_type_of_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_scda_type_of_number = 504 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scda_type_of_number
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_scda_type_of_number = ParameterType_pt_gsmmap_scda_type_of_number satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scda_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_scda_numbering_plan = 505 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_scda_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_scda_numbering_plan = ParameterType_pt_gsmmap_scda_numbering_plan satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_imsi
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_imsi = 506 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_imsi
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_imsi = ParameterType_pt_gsmmap_imsi satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_msisdn_digits
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_msisdn_digits = 507 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_msisdn_digits
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_msisdn_digits = ParameterType_pt_gsmmap_msisdn_digits satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_msisdn_type_of_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_msisdn_type_of_number = 508 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_msisdn_type_of_number
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_msisdn_type_of_number = ParameterType_pt_gsmmap_msisdn_type_of_number satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_msisdn_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_msisdn_numbering_plan = 509 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_msisdn_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_msisdn_numbering_plan = ParameterType_pt_gsmmap_msisdn_numbering_plan satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_source_transaction_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_source_transaction_id = 510 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_source_transaction_id
 * @constant
 * @type {number}
 */
export
const pt_tcap_source_transaction_id = ParameterType_pt_tcap_source_transaction_id satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_destination_transaction_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_destination_transaction_id = 511 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_destination_transaction_id
 * @constant
 * @type {number}
 */
export
const pt_tcap_destination_transaction_id = ParameterType_pt_tcap_destination_transaction_id satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_opcode
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_opcode = 512 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_opcode
 * @constant
 * @type {number}
 */
export
const pt_tcap_opcode = ParameterType_pt_tcap_opcode satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_component_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_component_type = 513 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_component_type
 * @constant
 * @type {number}
 */
export
const pt_tcap_component_type = ParameterType_pt_tcap_component_type satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_component_invoke_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_component_invoke_id = 514 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_component_invoke_id
 * @constant
 * @type {number}
 */
export
const pt_tcap_component_invoke_id = ParameterType_pt_tcap_component_invoke_id satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_error_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_error_type = 515 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_error_type
 * @constant
 * @type {number}
 */
export
const pt_tcap_error_type = ParameterType_pt_tcap_error_type satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_error_code
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_error_code = 516 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_error_code
 * @constant
 * @type {number}
 */
export
const pt_tcap_error_code = ParameterType_pt_tcap_error_code satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_dialogue_context_oid
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_dialogue_context_oid = 517 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_dialogue_context_oid
 * @constant
 * @type {number}
 */
export
const pt_tcap_dialogue_context_oid = ParameterType_pt_tcap_dialogue_context_oid satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_message_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_message_type = 518 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_message_type
 * @constant
 * @type {number}
 */
export
const pt_tcap_message_type = ParameterType_pt_tcap_message_type satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_nnn_digits
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_nnn_digits = 519 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_nnn_digits
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_nnn_digits = ParameterType_pt_gsmmap_nnn_digits satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_nnn_type_of_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_nnn_type_of_number = 520 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_nnn_type_of_number
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_nnn_type_of_number = ParameterType_pt_gsmmap_nnn_type_of_number satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_nnn_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_nnn_numbering_plan = 521 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_nnn_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_nnn_numbering_plan = ParameterType_pt_gsmmap_nnn_numbering_plan satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_an_digits
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_an_digits = 522 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_an_digits
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_an_digits = ParameterType_pt_gsmmap_an_digits satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_an_type_of_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_an_type_of_number = 523 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_an_type_of_number
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_an_type_of_number = ParameterType_pt_gsmmap_an_type_of_number satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_an_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_an_numbering_plan = 524 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_an_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_an_numbering_plan = ParameterType_pt_gsmmap_an_numbering_plan satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_sca_digits
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_sca_digits = 525 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_sca_digits
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_sca_digits = ParameterType_pt_gsmmap_sca_digits satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_sca_type_of_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_sca_type_of_number = 526 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_sca_type_of_number
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_sca_type_of_number = ParameterType_pt_gsmmap_sca_type_of_number satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_sca_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_sca_numbering_plan = 527 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_sca_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_sca_numbering_plan = ParameterType_pt_gsmmap_sca_numbering_plan satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_component_count
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_component_count = 528 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_component_count
 * @constant
 * @type {number}
 */
export
const pt_tcap_component_count = ParameterType_pt_tcap_component_count satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_dialogue_context_supported
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_dialogue_context_supported = 529 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_dialogue_context_supported
 * @constant
 * @type {number}
 */
export
const pt_tcap_dialogue_context_supported = ParameterType_pt_tcap_dialogue_context_supported satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_component_index
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_component_index = 530 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_component_index
 * @constant
 * @type {number}
 */
export
const pt_tcap_component_index = ParameterType_pt_tcap_component_index satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_source_transaction_id_length
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_source_transaction_id_length = 531 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_source_transaction_id_length
 * @constant
 * @type {number}
 */
export
const pt_tcap_source_transaction_id_length = ParameterType_pt_tcap_source_transaction_id_length satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_destination_transaction_id_length
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_tcap_destination_transaction_id_length = 532 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_tcap_destination_transaction_id_length
 * @constant
 * @type {number}
 */
export
const pt_tcap_destination_transaction_id_length = ParameterType_pt_tcap_destination_transaction_id_length satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_version
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_gsmmap_version = 533 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_gsmmap_version
 * @constant
 * @type {number}
 */
export
const pt_gsmmap_version = ParameterType_pt_gsmmap_version satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_udhi
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_udhi = 400 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_udhi
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_udhi = ParameterType_pt_smstpdu_tp_udhi satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_sri
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_sri = 401 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_sri
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_sri = ParameterType_pt_smstpdu_tp_sri satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_mms
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_mms = 402 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_mms
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_mms = ParameterType_pt_smstpdu_tp_mms satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_mti
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_mti = 403 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_mti
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_mti = ParameterType_pt_smstpdu_tp_mti satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_oa_type_of_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_oa_type_of_number = 404 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_oa_type_of_number
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_oa_type_of_number = ParameterType_pt_smstpdu_tp_oa_type_of_number satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_oa_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_oa_numbering_plan = 405 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_oa_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_oa_numbering_plan = ParameterType_pt_smstpdu_tp_oa_numbering_plan satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_oa_digits
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_oa_digits = 406 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_oa_digits
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_oa_digits = ParameterType_pt_smstpdu_tp_oa_digits satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_pid
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_pid = 407 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_pid
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_pid = ParameterType_pt_smstpdu_tp_pid satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_dcs
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_dcs = 408 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_dcs
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_dcs = ParameterType_pt_smstpdu_tp_dcs satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_scts
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_scts = 409 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_scts
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_scts = ParameterType_pt_smstpdu_tp_scts satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_udl
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_udl = 410 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_udl
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_udl = ParameterType_pt_smstpdu_tp_udl satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_ud
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_ud = 411 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_ud
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_ud = ParameterType_pt_smstpdu_tp_ud satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_rp
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_rp = 412 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_rp
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_rp = ParameterType_pt_smstpdu_tp_rp satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_srr
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_srr = 413 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_srr
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_srr = ParameterType_pt_smstpdu_tp_srr satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_vpf
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_vpf = 414 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_vpf
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_vpf = ParameterType_pt_smstpdu_tp_vpf satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_rd
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_rd = 415 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_rd
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_rd = ParameterType_pt_smstpdu_tp_rd satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_da_type_of_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_da_type_of_number = 416 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_da_type_of_number
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_da_type_of_number = ParameterType_pt_smstpdu_tp_da_type_of_number satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_da_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_da_numbering_plan = 417 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_da_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_da_numbering_plan = ParameterType_pt_smstpdu_tp_da_numbering_plan satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_da_digits
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_da_digits = 418 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_da_digits
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_da_digits = ParameterType_pt_smstpdu_tp_da_digits satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_vp
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_vp = 419 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_vp
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_vp = ParameterType_pt_smstpdu_tp_vp satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_msg_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_msg_id = 420 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_msg_id
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_msg_id = ParameterType_pt_smstpdu_msg_id satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_msg_parts
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_msg_parts = 421 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_msg_parts
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_msg_parts = ParameterType_pt_smstpdu_msg_parts satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_msg_part
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_msg_part = 422 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_msg_part
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_msg_part = ParameterType_pt_smstpdu_msg_part satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_mr
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_tp_mr = 423 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_tp_mr
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_tp_mr = ParameterType_pt_smstpdu_tp_mr satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_message_class
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_smstpdu_message_class = 424 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_smstpdu_message_class
 * @constant
 * @type {number}
 */
export
const pt_smstpdu_message_class = ParameterType_pt_smstpdu_message_class satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_destination_local_reference
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_destination_local_reference = 300 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_destination_local_reference
 * @constant
 * @type {number}
 */
export
const pt_sccp_destination_local_reference = ParameterType_pt_sccp_destination_local_reference satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_source_local_reference
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_source_local_reference = 301 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_source_local_reference
 * @constant
 * @type {number}
 */
export
const pt_sccp_source_local_reference = ParameterType_pt_sccp_source_local_reference satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_party
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_party = 302 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_party
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_party = ParameterType_pt_sccp_called_party satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_party
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_party = 303 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_party
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_party = ParameterType_pt_sccp_calling_party satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_protocol_class
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_protocol_class = 304 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_protocol_class
 * @constant
 * @type {number}
 */
export
const pt_sccp_protocol_class = ParameterType_pt_sccp_protocol_class satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_segmenting_reassembling
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_segmenting_reassembling = 305 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_segmenting_reassembling
 * @constant
 * @type {number}
 */
export
const pt_sccp_segmenting_reassembling = ParameterType_pt_sccp_segmenting_reassembling satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_receive_sequence_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_receive_sequence_number = 306 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_receive_sequence_number
 * @constant
 * @type {number}
 */
export
const pt_sccp_receive_sequence_number = ParameterType_pt_sccp_receive_sequence_number satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_sequencing_segmenting
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_sequencing_segmenting = 307 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_sequencing_segmenting
 * @constant
 * @type {number}
 */
export
const pt_sccp_sequencing_segmenting = ParameterType_pt_sccp_sequencing_segmenting satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_credit
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_credit = 308 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_credit
 * @constant
 * @type {number}
 */
export
const pt_sccp_credit = ParameterType_pt_sccp_credit satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_release_cause
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_release_cause = 309 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_release_cause
 * @constant
 * @type {number}
 */
export
const pt_sccp_release_cause = ParameterType_pt_sccp_release_cause satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_return_cause
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_return_cause = 310 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_return_cause
 * @constant
 * @type {number}
 */
export
const pt_sccp_return_cause = ParameterType_pt_sccp_return_cause satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_reset_cause
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_reset_cause = 311 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_reset_cause
 * @constant
 * @type {number}
 */
export
const pt_sccp_reset_cause = ParameterType_pt_sccp_reset_cause satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_error_cause
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_error_cause = 312 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_error_cause
 * @constant
 * @type {number}
 */
export
const pt_sccp_error_cause = ParameterType_pt_sccp_error_cause satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_refusal_cause
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_refusal_cause = 313 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_refusal_cause
 * @constant
 * @type {number}
 */
export
const pt_sccp_refusal_cause = ParameterType_pt_sccp_refusal_cause satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_data
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_data = 314 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_data
 * @constant
 * @type {number}
 */
export
const pt_sccp_data = ParameterType_pt_sccp_data satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_segmentation
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_segmentation = 315 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_segmentation
 * @constant
 * @type {number}
 */
export
const pt_sccp_segmentation = ParameterType_pt_sccp_segmentation satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_hop_counter
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_hop_counter = 316 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_hop_counter
 * @constant
 * @type {number}
 */
export
const pt_sccp_hop_counter = ParameterType_pt_sccp_hop_counter satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_importance
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_importance = 317 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_importance
 * @constant
 * @type {number}
 */
export
const pt_sccp_importance = ParameterType_pt_sccp_importance satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_long_data
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_long_data = 318 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_long_data
 * @constant
 * @type {number}
 */
export
const pt_sccp_long_data = ParameterType_pt_sccp_long_data satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_routing_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_routing_indicator = 319 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_routing_indicator
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_routing_indicator = ParameterType_pt_sccp_called_pa_routing_indicator satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_global_title_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_global_title_indicator = 320 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_global_title_indicator
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_global_title_indicator = ParameterType_pt_sccp_called_pa_global_title_indicator satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_ssn_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_ssn_indicator = 321 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_ssn_indicator
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_ssn_indicator = ParameterType_pt_sccp_called_pa_ssn_indicator satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_point_code_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_point_code_indicator = 322 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_point_code_indicator
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_point_code_indicator = ParameterType_pt_sccp_called_pa_point_code_indicator satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_point_code_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_point_code_number = 323 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_point_code_number
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_point_code_number = ParameterType_pt_sccp_called_pa_point_code_number satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_subsystem_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_subsystem_number = 324 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_subsystem_number
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_subsystem_number = ParameterType_pt_sccp_called_pa_subsystem_number satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_gt_numbering_plan = 325 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_gt_numbering_plan = ParameterType_pt_sccp_called_pa_gt_numbering_plan satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_encoding_scheme
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_gt_encoding_scheme = 326 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_encoding_scheme
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_gt_encoding_scheme = ParameterType_pt_sccp_called_pa_gt_encoding_scheme satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_nature_of_address
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_gt_nature_of_address = 327 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_nature_of_address
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_gt_nature_of_address = ParameterType_pt_sccp_called_pa_gt_nature_of_address satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_address
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_gt_address = 328 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_address
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_gt_address = ParameterType_pt_sccp_called_pa_gt_address satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_translation_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_called_pa_gt_translation_type = 329 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_called_pa_gt_translation_type
 * @constant
 * @type {number}
 */
export
const pt_sccp_called_pa_gt_translation_type = ParameterType_pt_sccp_called_pa_gt_translation_type satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_routing_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_routing_indicator = 330 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_routing_indicator
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_routing_indicator = ParameterType_pt_sccp_calling_pa_routing_indicator satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_global_title_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_global_title_indicator = 331 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_global_title_indicator
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_global_title_indicator = ParameterType_pt_sccp_calling_pa_global_title_indicator satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_ssn_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_ssn_indicator = 332 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_ssn_indicator
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_ssn_indicator = ParameterType_pt_sccp_calling_pa_ssn_indicator satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_point_code_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_point_code_indicator = 333 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_point_code_indicator
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_point_code_indicator = ParameterType_pt_sccp_calling_pa_point_code_indicator satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_point_code_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_point_code_number = 334 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_point_code_number
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_point_code_number = ParameterType_pt_sccp_calling_pa_point_code_number satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_subsystem_number
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_subsystem_number = 335 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_subsystem_number
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_subsystem_number = ParameterType_pt_sccp_calling_pa_subsystem_number satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_numbering_plan
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_gt_numbering_plan = 336 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_numbering_plan
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_gt_numbering_plan = ParameterType_pt_sccp_calling_pa_gt_numbering_plan satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_encoding_scheme
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_gt_encoding_scheme = 337 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_encoding_scheme
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_gt_encoding_scheme = ParameterType_pt_sccp_calling_pa_gt_encoding_scheme satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_nature_of_address
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_gt_nature_of_address = 338 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_nature_of_address
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_gt_nature_of_address = ParameterType_pt_sccp_calling_pa_gt_nature_of_address satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_address
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_gt_address = 339 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_address
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_gt_address = ParameterType_pt_sccp_calling_pa_gt_address satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_translation_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_calling_pa_gt_translation_type = 340 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_calling_pa_gt_translation_type
 * @constant
 * @type {number}
 */
export
const pt_sccp_calling_pa_gt_translation_type = ParameterType_pt_sccp_calling_pa_gt_translation_type satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_message_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_sccp_message_type = 341 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_sccp_message_type
 * @constant
 * @type {number}
 */
export
const pt_sccp_message_type = ParameterType_pt_sccp_message_type satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_info_string
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_info_string = 200 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_info_string
 * @constant
 * @type {number}
 */
export
const pt_m3ua_info_string = ParameterType_pt_m3ua_info_string satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_routing_context
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_routing_context = 201 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_routing_context
 * @constant
 * @type {number}
 */
export
const pt_m3ua_routing_context = ParameterType_pt_m3ua_routing_context satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_diagnostic_info
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_diagnostic_info = 202 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_diagnostic_info
 * @constant
 * @type {number}
 */
export
const pt_m3ua_diagnostic_info = ParameterType_pt_m3ua_diagnostic_info satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_heartbeat
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_heartbeat = 203 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_heartbeat
 * @constant
 * @type {number}
 */
export
const pt_m3ua_heartbeat = ParameterType_pt_m3ua_heartbeat satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_traffic_mode_type
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_traffic_mode_type = 204 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_traffic_mode_type
 * @constant
 * @type {number}
 */
export
const pt_m3ua_traffic_mode_type = ParameterType_pt_m3ua_traffic_mode_type satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_error_code
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_error_code = 205 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_error_code
 * @constant
 * @type {number}
 */
export
const pt_m3ua_error_code = ParameterType_pt_m3ua_error_code satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_status
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_status = 206 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_status
 * @constant
 * @type {number}
 */
export
const pt_m3ua_status = ParameterType_pt_m3ua_status satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_asp_identifier
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_asp_identifier = 207 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_asp_identifier
 * @constant
 * @type {number}
 */
export
const pt_m3ua_asp_identifier = ParameterType_pt_m3ua_asp_identifier satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_affected_point_code
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_affected_point_code = 208 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_affected_point_code
 * @constant
 * @type {number}
 */
export
const pt_m3ua_affected_point_code = ParameterType_pt_m3ua_affected_point_code satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_correlation_id
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_correlation_id = 209 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_correlation_id
 * @constant
 * @type {number}
 */
export
const pt_m3ua_correlation_id = ParameterType_pt_m3ua_correlation_id satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_network_appearance
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_network_appearance = 210 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_network_appearance
 * @constant
 * @type {number}
 */
export
const pt_m3ua_network_appearance = ParameterType_pt_m3ua_network_appearance satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_user_cause
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_user_cause = 211 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_user_cause
 * @constant
 * @type {number}
 */
export
const pt_m3ua_user_cause = ParameterType_pt_m3ua_user_cause satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_congestion_indications
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_congestion_indications = 212 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_congestion_indications
 * @constant
 * @type {number}
 */
export
const pt_m3ua_congestion_indications = ParameterType_pt_m3ua_congestion_indications satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_concerned_destination
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_concerned_destination = 213 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_concerned_destination
 * @constant
 * @type {number}
 */
export
const pt_m3ua_concerned_destination = ParameterType_pt_m3ua_concerned_destination satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_routing_key
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_routing_key = 214 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_routing_key
 * @constant
 * @type {number}
 */
export
const pt_m3ua_routing_key = ParameterType_pt_m3ua_routing_key satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_registration_result
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_registration_result = 215 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_registration_result
 * @constant
 * @type {number}
 */
export
const pt_m3ua_registration_result = ParameterType_pt_m3ua_registration_result satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_deregistration_result
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_deregistration_result = 216 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_deregistration_result
 * @constant
 * @type {number}
 */
export
const pt_m3ua_deregistration_result = ParameterType_pt_m3ua_deregistration_result satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_local_routing_key_identifier
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_local_routing_key_identifier = 217 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_local_routing_key_identifier
 * @constant
 * @type {number}
 */
export
const pt_m3ua_local_routing_key_identifier = ParameterType_pt_m3ua_local_routing_key_identifier satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_destination_point_code
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_destination_point_code = 218 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_destination_point_code
 * @constant
 * @type {number}
 */
export
const pt_m3ua_destination_point_code = ParameterType_pt_m3ua_destination_point_code satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_service_indicators
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_service_indicators = 219 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_service_indicators
 * @constant
 * @type {number}
 */
export
const pt_m3ua_service_indicators = ParameterType_pt_m3ua_service_indicators satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_origination_point_code_list
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_origination_point_code_list = 220 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_origination_point_code_list
 * @constant
 * @type {number}
 */
export
const pt_m3ua_origination_point_code_list = ParameterType_pt_m3ua_origination_point_code_list satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_circuit_range
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_circuit_range = 221 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_circuit_range
 * @constant
 * @type {number}
 */
export
const pt_m3ua_circuit_range = ParameterType_pt_m3ua_circuit_range satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_protocol_data = 222 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data
 * @constant
 * @type {number}
 */
export
const pt_m3ua_protocol_data = ParameterType_pt_m3ua_protocol_data satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_service_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_protocol_data_service_indicator = 223 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_service_indicator
 * @constant
 * @type {number}
 */
export
const pt_m3ua_protocol_data_service_indicator = ParameterType_pt_m3ua_protocol_data_service_indicator satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_network_indicator
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_protocol_data_network_indicator = 224 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_network_indicator
 * @constant
 * @type {number}
 */
export
const pt_m3ua_protocol_data_network_indicator = ParameterType_pt_m3ua_protocol_data_network_indicator satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_message_priority
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_protocol_data_message_priority = 225 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_message_priority
 * @constant
 * @type {number}
 */
export
const pt_m3ua_protocol_data_message_priority = ParameterType_pt_m3ua_protocol_data_message_priority satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_destination_point_code
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_protocol_data_destination_point_code = 226 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_destination_point_code
 * @constant
 * @type {number}
 */
export
const pt_m3ua_protocol_data_destination_point_code = ParameterType_pt_m3ua_protocol_data_destination_point_code satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_originating_point_code
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_protocol_data_originating_point_code = 227 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_originating_point_code
 * @constant
 * @type {number}
 */
export
const pt_m3ua_protocol_data_originating_point_code = ParameterType_pt_m3ua_protocol_data_originating_point_code satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_signalling_link_selection_code
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_protocol_data_signalling_link_selection_code = 228 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_protocol_data_signalling_link_selection_code
 * @constant
 * @type {number}
 */
export
const pt_m3ua_protocol_data_signalling_link_selection_code = ParameterType_pt_m3ua_protocol_data_signalling_link_selection_code satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_registration_status
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_registration_status = 229 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_registration_status
 * @constant
 * @type {number}
 */
export
const pt_m3ua_registration_status = ParameterType_pt_m3ua_registration_status satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_deregistration_status
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_deregistration_status = 230 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_deregistration_status
 * @constant
 * @type {number}
 */
export
const pt_m3ua_deregistration_status = ParameterType_pt_m3ua_deregistration_status satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_header_data
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_header_data = 231 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_header_data
 * @constant
 * @type {number}
 */
export
const pt_m3ua_header_data = ParameterType_pt_m3ua_header_data satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_as_label
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_as_label = 232 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_as_label
 * @constant
 * @type {number}
 */
export
const pt_m3ua_as_label = ParameterType_pt_m3ua_as_label satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_asp_label
 * @constant
 * @type {number}
 */
export
const ParameterType_pt_m3ua_asp_label = 233 satisfies ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterType_pt_m3ua_asp_label
 * @constant
 * @type {number}
 */
export
const pt_m3ua_asp_label = ParameterType_pt_m3ua_asp_label satisfies ParameterType; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ParameterType = $._decodeInteger;
export const _encode_ParameterType = $._encodeInteger;


/* eslint-enable */
