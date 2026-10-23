/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_DefaultTransactionHandling, _encode_DefaultTransactionHandling, _enum_for_DefaultTransactionHandling, DefaultTransactionHandling } from "../GPRSChargingDataTypes/DefaultTransactionHandling.ta.mjs";


/**
 * @summary CAMELInformationSMS
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
 * CAMELInformationSMS ::= SET {
 *    sCFAddress                         [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    serviceKey                         [2] IMPLICIT INTEGER ( 0 .. 2147483647 ) OPTIONAL,
 *    defaultSMSHandling                 [3] IMPLICIT DefaultTransactionHandling OPTIONAL,
 *    cAMELCallingPartyNumber            [4] IMPLICIT OCTET STRING OPTIONAL,
 *    cAMELDestinationSubscriberNumber   [5] IMPLICIT OCTET STRING OPTIONAL,
 *    cAMELSMSCAddress                   [6] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    freeFormatData                     [7] IMPLICIT OCTET STRING ( SIZE( 1 .. 160 ) ) OPTIONAL,
 *    smsReferenceNumber                 [8] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class CAMELInformationSMS {
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
     * @summary `defaultSMSHandling`.
     * @public
     * @readonly
     */
    readonly defaultSMSHandling: OPTIONAL<DefaultTransactionHandling>;
    /**
     * @summary `cAMELCallingPartyNumber`.
     * @description
     *
     * CAMEL Calling Party Number (S-SMO-CDR, S-SMT-CDR): This field contains the
     * Calling Party Number modified by the CAMEL service.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly cAMELCallingPartyNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cAMELDestinationSubscriberNumber`.
     * @description
     *
     * CAMEL Destination Subscriber Number (S-SMO-CDR): This field contains the
     * short message Destination Number modified by the CAMEL service.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly cAMELDestinationSubscriberNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cAMELSMSCAddress`.
     * @public
     * @readonly
     */
    readonly cAMELSMSCAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `freeFormatData`.
     * @public
     * @readonly
     */
    readonly freeFormatData: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `smsReferenceNumber`.
     * @public
     * @readonly
     */
    readonly smsReferenceNumber: OPTIONAL<OCTET_STRING>;

    constructor (
        sCFAddress?: OPTIONAL<OCTET_STRING>,
        serviceKey?: OPTIONAL<INTEGER>,
        defaultSMSHandling?: OPTIONAL<DefaultTransactionHandling>,
        cAMELCallingPartyNumber?: OPTIONAL<OCTET_STRING>,
        cAMELDestinationSubscriberNumber?: OPTIONAL<OCTET_STRING>,
        cAMELSMSCAddress?: OPTIONAL<OCTET_STRING>,
        freeFormatData?: OPTIONAL<OCTET_STRING>,
        smsReferenceNumber?: OPTIONAL<OCTET_STRING>
    ) {
        this.sCFAddress = sCFAddress;
        this.serviceKey = serviceKey;
        this.defaultSMSHandling = defaultSMSHandling;
        this.cAMELCallingPartyNumber = cAMELCallingPartyNumber;
        this.cAMELDestinationSubscriberNumber = cAMELDestinationSubscriberNumber;
        this.cAMELSMSCAddress = cAMELSMSCAddress;
        this.freeFormatData = freeFormatData;
        this.smsReferenceNumber = smsReferenceNumber;
    
        if (this.sCFAddress !== undefined && (this.sCFAddress.length < 1 || this.sCFAddress.length > 20)) {
            throw new ASN1SizeError("CAMELInformationSMS.sCFAddress violates SIZE constraint");
        }
        if (this.serviceKey !== undefined && (this.serviceKey < 0 || this.serviceKey > 2147483647)) {
            throw new ASN1OverflowError("CAMELInformationSMS.serviceKey violates INTEGER range");
        }
        if (this.cAMELSMSCAddress !== undefined && (this.cAMELSMSCAddress.length < 1 || this.cAMELSMSCAddress.length > 20)) {
            throw new ASN1SizeError("CAMELInformationSMS.cAMELSMSCAddress violates SIZE constraint");
        }
        if (this.freeFormatData !== undefined && (this.freeFormatData.length < 1 || this.freeFormatData.length > 160)) {
            throw new ASN1SizeError("CAMELInformationSMS.freeFormatData violates SIZE constraint");
        }
        if (this.smsReferenceNumber !== undefined && (this.smsReferenceNumber.length < 1 || this.smsReferenceNumber.length > 8)) {
            throw new ASN1SizeError("CAMELInformationSMS.smsReferenceNumber violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a CAMELInformationSMS
     * @description
     * 
     * This takes an `object` and converts it to a `CAMELInformationSMS`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CAMELInformationSMS`.
     * @returns {CAMELInformationSMS}
     */
    public static _from_object (_o: { [_K in keyof (CAMELInformationSMS)]: (CAMELInformationSMS)[_K] }): CAMELInformationSMS {
        return new CAMELInformationSMS(_o.sCFAddress, _o.serviceKey, _o.defaultSMSHandling, _o.cAMELCallingPartyNumber, _o.cAMELDestinationSubscriberNumber, _o.cAMELSMSCAddress, _o.freeFormatData, _o.smsReferenceNumber);
    }

        /**
         * @summary The enum used as the type of the component `defaultSMSHandling`
         * @public
         * @static
         */

    public static _enum_for_defaultSMSHandling = _enum_for_DefaultTransactionHandling;
}

/**
 * @summary The Leading Root Component Types of CAMELInformationSMS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CAMELInformationSMS: $.ComponentSpec[] = [
    new $.ComponentSpec("sCFAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceKey", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("defaultSMSHandling", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("cAMELCallingPartyNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("cAMELDestinationSubscriberNumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("cAMELSMSCAddress", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("freeFormatData", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("smsReferenceNumber", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of CAMELInformationSMS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CAMELInformationSMS: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CAMELInformationSMS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CAMELInformationSMS: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CAMELInformationSMS: $.ASN1Decoder<CAMELInformationSMS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CAMELInformationSMS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CAMELInformationSMS (el: _Element): CAMELInformationSMS {
    if (!_cached_decoder_for_CAMELInformationSMS) { _cached_decoder_for_CAMELInformationSMS = function (el: _Element): CAMELInformationSMS {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let sCFAddress: OPTIONAL<OCTET_STRING>;
    let serviceKey: OPTIONAL<INTEGER>;
    let defaultSMSHandling: OPTIONAL<DefaultTransactionHandling>;
    let cAMELCallingPartyNumber: OPTIONAL<OCTET_STRING>;
    let cAMELDestinationSubscriberNumber: OPTIONAL<OCTET_STRING>;
    let cAMELSMSCAddress: OPTIONAL<OCTET_STRING>;
    let freeFormatData: OPTIONAL<OCTET_STRING>;
    let smsReferenceNumber: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "sCFAddress": (_el: _Element): void => { sCFAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "defaultSMSHandling": (_el: _Element): void => { defaultSMSHandling = $._decode_implicit<DefaultTransactionHandling>(() => _decode_DefaultTransactionHandling)(_el); },
        "cAMELCallingPartyNumber": (_el: _Element): void => { cAMELCallingPartyNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cAMELDestinationSubscriberNumber": (_el: _Element): void => { cAMELDestinationSubscriberNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cAMELSMSCAddress": (_el: _Element): void => { cAMELSMSCAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "freeFormatData": (_el: _Element): void => { freeFormatData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "smsReferenceNumber": (_el: _Element): void => { smsReferenceNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_CAMELInformationSMS,
        _extension_additions_list_spec_for_CAMELInformationSMS,
        _root_component_type_list_2_spec_for_CAMELInformationSMS,
        undefined,
    );
    return new CAMELInformationSMS( /* SET_CONSTRUCTOR_CALL */
        sCFAddress,
        serviceKey,
        defaultSMSHandling,
        cAMELCallingPartyNumber,
        cAMELDestinationSubscriberNumber,
        cAMELSMSCAddress,
        freeFormatData,
        smsReferenceNumber
    );
}; }
    return _cached_decoder_for_CAMELInformationSMS(el);
}

let _cached_encoder_for_CAMELInformationSMS: $.ASN1Encoder<CAMELInformationSMS> | null = null;

/**
 * @summary Encodes a(n) CAMELInformationSMS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CAMELInformationSMS, encoded as an ASN.1 Element.
 */
export
function _encode_CAMELInformationSMS (value: CAMELInformationSMS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CAMELInformationSMS) { _cached_encoder_for_CAMELInformationSMS = function (value: CAMELInformationSMS, _elGetter: $.ASN1Encoder<CAMELInformationSMS>): _Element {
    const _components: _Element[] = [];
    if (value.sCFAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.sCFAddress, $.BER));
    }
    if (value.serviceKey !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.serviceKey, $.BER));
    }
    if (value.defaultSMSHandling !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_DefaultTransactionHandling, $.BER)(value.defaultSMSHandling, $.BER));
    }
    if (value.cAMELCallingPartyNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.cAMELCallingPartyNumber, $.BER));
    }
    if (value.cAMELDestinationSubscriberNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.cAMELDestinationSubscriberNumber, $.BER));
    }
    if (value.cAMELSMSCAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.cAMELSMSCAddress, $.BER));
    }
    if (value.freeFormatData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.freeFormatData, $.BER));
    }
    if (value.smsReferenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.smsReferenceNumber, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_CAMELInformationSMS(value, elGetter);
}


/* eslint-enable */
