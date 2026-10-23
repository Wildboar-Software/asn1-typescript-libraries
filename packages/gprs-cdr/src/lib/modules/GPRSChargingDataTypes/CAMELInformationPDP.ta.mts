/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    IA5String,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_DefaultTransactionHandling, _encode_DefaultTransactionHandling, _enum_for_DefaultTransactionHandling, DefaultTransactionHandling } from "../GPRSChargingDataTypes/DefaultTransactionHandling.ta.mjs";
import { _decode_CAMELInformationPDP_levelOfCAMELService, _encode_CAMELInformationPDP_levelOfCAMELService, CAMELInformationPDP_levelOfCAMELService } from "../GPRSChargingDataTypes/CAMELInformationPDP-levelOfCAMELService.ta.mjs";


/**
 * @summary CAMELInformationPDP
 * @description
 *
 * This field includes following CAMEL information elements for PDP context
 * (S-CDR), Attach/Detach session (M-CDR), Mobile originated SMS (S-SMO-CDR)
 * and Mobile terminated SMS (S-SMT-CDR) if corresponding CAMEL service is
 * activated. CAMEL Access Point Name NI (S-CDR): This field contains the
 * network identifier part of APN before modification by the CSE. CAMEL
 * Access Point Name OI (S-CDR): This field contains the operator identifier
 * part of APN before modification by the CSE. CAMEL Calling Party Number
 * (S-SMO-CDR, S-SMT-CDR): This field contains the Calling Party Number
 * modified by the CAMEL service. CAMEL Destination Subscriber Number
 * (S-SMO-CDR): This field contains the short message Destination Number
 * modified by the CAMEL service. CAMEL SMSC Address (S-SMO-CDR): This field
 * contains the SMSC address modified by the CAMEL service. SCF address
 * (S-CDR, M-CDR, S-SMO-CDR, S-SMT-CDR): This field identifies the CAMEL
 * server serving the subscriber. Address is defined in HLR as part of CAMEL
 * subscription information. Service key (S-CDR, M-CDR, S-SMO-CDR,
 * S-SMT-CDR): This field identifies the CAMEL service logic applied. Service
 * key is defined in HLR as part of CAMEL subscription information. Default
 * Transaction/SMS Handling (S-CDR, M-CDR, S-SMO-CDR, S-SMT-CDR): This field
 * indicates whether or not a CAMEL encountered default GPRS- or
 * SMS-handling. This field shall be present only if default call handling
 * has been applied. Parameter is defined in HLR as part of CAMEL
 * subscription information.
 *
 * PS-domain online charging in the SGSN may use CAMEL. That function is
 * specified in TS 23.078 and TS 29.078 and is outside the scope of TS
 * 32.251 (clause 5.3.1.0). The CDR still carries this information when the
 * CAMEL service is activated.
 * 
 *
 * 3GPP TS 32.251 V19.0.0.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMELInformationPDP ::= SET {
 *    sCFAddress                   [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    serviceKey                   [2] IMPLICIT INTEGER ( 0 .. 2147483647 ) OPTIONAL,
 *    defaultTransactionHandling   [3] IMPLICIT DefaultTransactionHandling OPTIONAL,
 *    cAMELAccessPointNameNI       [4] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL,
 *    cAMELAccessPointNameOI       [5] IMPLICIT IA5String  ( SIZE( 1 .. 37 ) ) OPTIONAL,
 *    numberOfDPEncountered        [6] IMPLICIT INTEGER OPTIONAL,
 *    levelOfCAMELService          [7] IMPLICIT BIT STRING {
 *       basic  (0 ),
 *       callDurationSupervision  (1 ),
 *       onlineCharging  (2 )} OPTIONAL,
 *    freeFormatData               [8] IMPLICIT OCTET STRING ( SIZE( 1 .. 160 ) ) OPTIONAL,
 *    fFDAppendIndicator           [9] IMPLICIT BOOLEAN OPTIONAL}
 * ```
 * 
 * @class
 */
export
class CAMELInformationPDP {
    /**
     * @summary `sCFAddress`.
     * @public
     * @readonly
     */
    readonly sCFAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceKey`.
     * @public
     * @readonly
     */
    readonly serviceKey: OPTIONAL<INTEGER>;
    /**
     * @summary `defaultTransactionHandling`.
     * @public
     * @readonly
     */
    readonly defaultTransactionHandling: OPTIONAL<DefaultTransactionHandling>;
    /**
     * @summary `cAMELAccessPointNameNI`.
     * @description
     *
     * CAMEL Access Point Name NI (S-CDR): This field contains the network
     * identifier part of APN before modification by the CSE.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly cAMELAccessPointNameNI: OPTIONAL<IA5String>;
    /**
     * @summary `cAMELAccessPointNameOI`.
     * @description
     *
     * CAMEL Access Point Name OI (S-CDR): This field contains the operator
     * identifier part of APN before modification by the CSE.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly cAMELAccessPointNameOI: OPTIONAL<IA5String>;
    /**
     * @summary `numberOfDPEncountered`.
     * @public
     * @readonly
     */
    readonly numberOfDPEncountered: OPTIONAL<INTEGER>;
    /**
     * @summary `levelOfCAMELService`.
     * @description
     *
     * Level of CAMEL services (S-CDR, M-CDR): This field describes briefly the
     * complexity of CAMEL invocation. Categories are the same as in circuit
     * switched services and measure of resource usage in VPLMN requested by
     * HPLMN. "Basic" means that CAMEL feature is invoked during the PDP context
     * activation phase only (e.g. to modify APN_NI/APN_OI). "Call duration
     * supervision" means that PDP context duration or volume supervision is
     * applied in the gprsSSF of the VPLMN (Apply Charging message is received
     * from the gsmSCF).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly levelOfCAMELService: OPTIONAL<CAMELInformationPDP_levelOfCAMELService>;
    /**
     * @summary `freeFormatData`.
     * @public
     * @readonly
     */
    readonly freeFormatData: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `fFDAppendIndicator`.
     * @description
     *
     * FFD Append Indicator (S-CDR, M-CDR): This field contains an indicator
     * whether CAMEL free format data is to be appended to free format data
     * stored in previous partial CDR. This field is needed in CDR post
     * processing to sort out valid free format data for that call leg from
     * sequence of partial records. Creation of partial records is independent of
     * received FCIs and thus valid free format data may be divided to different
     * partial records. If field is missing then free format data in this CDR
     * replaces all received free format data in previous CDRs. Append indicator
     * is not needed in the first partial record. In following partial records
     * indicator shall get value true if all FCIs received during that partial
     * record have append indicator. If one or more of the received FCIs for that
     * call leg during the partial record do not have append indicator then this
     * field shall be missing.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly fFDAppendIndicator: OPTIONAL<BOOLEAN>;

    constructor (
        sCFAddress?: OPTIONAL<OCTET_STRING>,
        serviceKey?: OPTIONAL<INTEGER>,
        defaultTransactionHandling?: OPTIONAL<DefaultTransactionHandling>,
        cAMELAccessPointNameNI?: OPTIONAL<IA5String>,
        cAMELAccessPointNameOI?: OPTIONAL<IA5String>,
        numberOfDPEncountered?: OPTIONAL<INTEGER>,
        levelOfCAMELService?: OPTIONAL<CAMELInformationPDP_levelOfCAMELService>,
        freeFormatData?: OPTIONAL<OCTET_STRING>,
        fFDAppendIndicator?: OPTIONAL<BOOLEAN>
    ) {
        this.sCFAddress = sCFAddress;
        this.serviceKey = serviceKey;
        this.defaultTransactionHandling = defaultTransactionHandling;
        this.cAMELAccessPointNameNI = cAMELAccessPointNameNI;
        this.cAMELAccessPointNameOI = cAMELAccessPointNameOI;
        this.numberOfDPEncountered = numberOfDPEncountered;
        this.levelOfCAMELService = levelOfCAMELService;
        this.freeFormatData = freeFormatData;
        this.fFDAppendIndicator = fFDAppendIndicator;
    
        if (this.sCFAddress !== undefined && (this.sCFAddress.length < 1 || this.sCFAddress.length > 20)) {
            throw new ASN1SizeError("CAMELInformationPDP.sCFAddress violates SIZE constraint");
        }
        if (this.serviceKey !== undefined && (this.serviceKey < 0 || this.serviceKey > 2147483647)) {
            throw new ASN1OverflowError("CAMELInformationPDP.serviceKey violates INTEGER range");
        }
        if (this.cAMELAccessPointNameNI !== undefined && (this.cAMELAccessPointNameNI.length < 1 || this.cAMELAccessPointNameNI.length > 63)) {
            throw new ASN1SizeError("CAMELInformationPDP.cAMELAccessPointNameNI violates SIZE constraint");
        }
        if (this.cAMELAccessPointNameOI !== undefined && (this.cAMELAccessPointNameOI.length < 1 || this.cAMELAccessPointNameOI.length > 37)) {
            throw new ASN1SizeError("CAMELInformationPDP.cAMELAccessPointNameOI violates SIZE constraint");
        }
        if (this.freeFormatData !== undefined && (this.freeFormatData.length < 1 || this.freeFormatData.length > 160)) {
            throw new ASN1SizeError("CAMELInformationPDP.freeFormatData violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a CAMELInformationPDP
     * @description
     * 
     * This takes an `object` and converts it to a `CAMELInformationPDP`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CAMELInformationPDP`.
     * @returns {CAMELInformationPDP}
     */
    public static _from_object (_o: { [_K in keyof (CAMELInformationPDP)]: (CAMELInformationPDP)[_K] }): CAMELInformationPDP {
        return new CAMELInformationPDP(_o.sCFAddress, _o.serviceKey, _o.defaultTransactionHandling, _o.cAMELAccessPointNameNI, _o.cAMELAccessPointNameOI, _o.numberOfDPEncountered, _o.levelOfCAMELService, _o.freeFormatData, _o.fFDAppendIndicator);
    }

        /**
         * @summary The enum used as the type of the component `defaultTransactionHandling`
         * @public
         * @static
         */

    public static _enum_for_defaultTransactionHandling = _enum_for_DefaultTransactionHandling;
}

/**
 * @summary The Leading Root Component Types of CAMELInformationPDP
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CAMELInformationPDP: $.ComponentSpec[] = [
    new $.ComponentSpec("sCFAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceKey", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("defaultTransactionHandling", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("cAMELAccessPointNameNI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("cAMELAccessPointNameOI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("numberOfDPEncountered", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("levelOfCAMELService", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("freeFormatData", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("fFDAppendIndicator", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of CAMELInformationPDP
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CAMELInformationPDP: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CAMELInformationPDP
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CAMELInformationPDP: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CAMELInformationPDP: $.ASN1Decoder<CAMELInformationPDP> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CAMELInformationPDP
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CAMELInformationPDP (el: _Element): CAMELInformationPDP {
    if (!_cached_decoder_for_CAMELInformationPDP) { _cached_decoder_for_CAMELInformationPDP = function (el: _Element): CAMELInformationPDP {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let sCFAddress: OPTIONAL<OCTET_STRING>;
    let serviceKey: OPTIONAL<INTEGER>;
    let defaultTransactionHandling: OPTIONAL<DefaultTransactionHandling>;
    let cAMELAccessPointNameNI: OPTIONAL<IA5String>;
    let cAMELAccessPointNameOI: OPTIONAL<IA5String>;
    let numberOfDPEncountered: OPTIONAL<INTEGER>;
    let levelOfCAMELService: OPTIONAL<CAMELInformationPDP_levelOfCAMELService>;
    let freeFormatData: OPTIONAL<OCTET_STRING>;
    let fFDAppendIndicator: OPTIONAL<BOOLEAN>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "sCFAddress": (_el: _Element): void => { sCFAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "defaultTransactionHandling": (_el: _Element): void => { defaultTransactionHandling = $._decode_implicit<DefaultTransactionHandling>(() => _decode_DefaultTransactionHandling)(_el); },
        "cAMELAccessPointNameNI": (_el: _Element): void => { cAMELAccessPointNameNI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "cAMELAccessPointNameOI": (_el: _Element): void => { cAMELAccessPointNameOI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "numberOfDPEncountered": (_el: _Element): void => { numberOfDPEncountered = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "levelOfCAMELService": (_el: _Element): void => { levelOfCAMELService = $._decode_implicit<CAMELInformationPDP_levelOfCAMELService>(() => _decode_CAMELInformationPDP_levelOfCAMELService)(_el); },
        "freeFormatData": (_el: _Element): void => { freeFormatData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "fFDAppendIndicator": (_el: _Element): void => { fFDAppendIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_CAMELInformationPDP,
        _extension_additions_list_spec_for_CAMELInformationPDP,
        _root_component_type_list_2_spec_for_CAMELInformationPDP,
        undefined,
    );
    return new CAMELInformationPDP( /* SET_CONSTRUCTOR_CALL */
        sCFAddress,
        serviceKey,
        defaultTransactionHandling,
        cAMELAccessPointNameNI,
        cAMELAccessPointNameOI,
        numberOfDPEncountered,
        levelOfCAMELService,
        freeFormatData,
        fFDAppendIndicator
    );
}; }
    return _cached_decoder_for_CAMELInformationPDP(el);
}

let _cached_encoder_for_CAMELInformationPDP: $.ASN1Encoder<CAMELInformationPDP> | null = null;

/**
 * @summary Encodes a(n) CAMELInformationPDP into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CAMELInformationPDP, encoded as an ASN.1 Element.
 */
export
function _encode_CAMELInformationPDP (value: CAMELInformationPDP, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CAMELInformationPDP) { _cached_encoder_for_CAMELInformationPDP = function (value: CAMELInformationPDP, _elGetter: $.ASN1Encoder<CAMELInformationPDP>): _Element {
    const _components: _Element[] = [];
    if (value.sCFAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.sCFAddress, $.BER));
    }
    if (value.serviceKey !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.serviceKey, $.BER));
    }
    if (value.defaultTransactionHandling !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_DefaultTransactionHandling, $.BER)(value.defaultTransactionHandling, $.BER));
    }
    if (value.cAMELAccessPointNameNI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeIA5String, $.BER)(value.cAMELAccessPointNameNI, $.BER));
    }
    if (value.cAMELAccessPointNameOI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeIA5String, $.BER)(value.cAMELAccessPointNameOI, $.BER));
    }
    if (value.numberOfDPEncountered !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.numberOfDPEncountered, $.BER));
    }
    if (value.levelOfCAMELService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_CAMELInformationPDP_levelOfCAMELService, $.BER)(value.levelOfCAMELService, $.BER));
    }
    if (value.freeFormatData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.freeFormatData, $.BER));
    }
    if (value.fFDAppendIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeBoolean, $.BER)(value.fFDAppendIndicator, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_CAMELInformationPDP(value, elGetter);
}


/* eslint-enable */
