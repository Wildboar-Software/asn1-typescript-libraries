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
import { _decode_CAMELSMSInformation_defaultSMSHandling, _encode_CAMELSMSInformation_defaultSMSHandling, _enum_for_CAMELSMSInformation_defaultSMSHandling, CAMELSMSInformation_defaultSMSHandling } from "../CSChargingDataTypes/CAMELSMSInformation-defaultSMSHandling.ta.mjs";


/**
 * @summary CAMELSMSInformation
 * @description
 *
 * This field contains following CAMEL information for mobile originated and
 * terminated SMS: Default SMS handling: This field indicates whether or not
 * a CAMEL encounters default SMS handling. This field shall be present only
 * if default SMS handling has been applied. Free format data: See clause
 * 5.1.2.1.26. Calling Party Number: This field contains Calling Party Number
 * modified by CAMEL service. CAMEL modified Service Centre: This field
 * contains SMS-C address modified by CAMEL service. NOTE: 1: This field is
 * only applicable for originated SMS. CAMEL Destination Subscriber Number
 * This field contains short message Destination Number modified by CAMEL
 * service. NOTE: 2: This field is only applicable for originated SMS. SMS
 * Reference Number: This field contains the SMS Reference Number assigned to
 * the Short Message by the MSC.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.12.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMELSMSInformation ::= SET {
 *    gsm-SCFAddress                [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    serviceKey                    [2] IMPLICIT INTEGER ( 0 .. 2147483647 ) OPTIONAL,
 *    defaultSMSHandling            [3] IMPLICIT ENUMERATED {
 *       continueTransaction    ( 0 ),
 *       releaseTransaction     ( 1 ),
 *       ...  } OPTIONAL,
 *    freeFormatData                [4] IMPLICIT OCTET STRING ( SIZE( 1 .. 160 ) ) OPTIONAL,
 *    callingPartyNumber            [5] IMPLICIT OCTET STRING OPTIONAL,
 *    destinationSubscriberNumber   [6] IMPLICIT OCTET STRING OPTIONAL,
 *    cAMELSMSCAddress              [7] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    smsReferenceNumber            [8] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ) OPTIONAL}
 * ```
 * @class
 */
export
class CAMELSMSInformation {
    /**
     * @summary `gsm_SCFAddress`.
     * @description
     *
     * This field identifies the CAMEL server serving the subscriber. Address is
     * defined in HLR as part of CAMEL subscription information.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.28.
     *
     * @public
     * @readonly
     */
    readonly gsm_SCFAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceKey`.
     * @description
     *
     * This field identifies the CAMEL service logic applied. Service key is
     * defined in HLR as part of CAMEL subscription information.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.83.
     *
     * @public
     * @readonly
     */
    readonly serviceKey: OPTIONAL<INTEGER>;
    /**
     * @summary `defaultSMSHandling`.
     * @description
     *
     * Default SMS handling: This field indicates whether or not a CAMEL
     * encounters default SMS handling. This field shall be present only if
     * default SMS handling has been applied.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.12.
     *
     * @public
     * @readonly
     */
    readonly defaultSMSHandling: OPTIONAL<CAMELSMSInformation_defaultSMSHandling>;
    /**
     * @summary `freeFormatData`.
     * @description
     *
     * Free format data: See clause 5.1.2.1.26.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.12.
     *
     * @public
     * @readonly
     */
    readonly freeFormatData: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callingPartyNumber`.
     * @description
     *
     * Calling Party Number: This field contains Calling Party Number modified
     * by CAMEL service.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.12.
     *
     * @public
     * @readonly
     */
    readonly callingPartyNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `destinationSubscriberNumber`.
     * @description
     *
     * This field contains Destination/Called Subscriber Number modified by
     * CAMEL service. If not modified then this field may contain original
     * Destination Number also when CAMEL is not active.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.17.
     *
     * @public
     * @readonly
     */
    readonly destinationSubscriberNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cAMELSMSCAddress`.
     * @public
     * @readonly
     */
    readonly cAMELSMSCAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `smsReferenceNumber`.
     * @description
     *
     * SMS Reference Number: This field contains the SMS Reference Number
     * assigned to the Short Message by the MSC.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.12.
     *
     * @public
     * @readonly
     */
    readonly smsReferenceNumber: OPTIONAL<OCTET_STRING>;

    constructor (
        gsm_SCFAddress: OPTIONAL<OCTET_STRING>,
        serviceKey: OPTIONAL<INTEGER>,
        defaultSMSHandling: OPTIONAL<CAMELSMSInformation_defaultSMSHandling>,
        freeFormatData: OPTIONAL<OCTET_STRING>,
        callingPartyNumber: OPTIONAL<OCTET_STRING>,
        destinationSubscriberNumber: OPTIONAL<OCTET_STRING>,
        cAMELSMSCAddress: OPTIONAL<OCTET_STRING>,
        smsReferenceNumber: OPTIONAL<OCTET_STRING>
    ) {
        this.gsm_SCFAddress = gsm_SCFAddress;
        this.serviceKey = serviceKey;
        this.defaultSMSHandling = defaultSMSHandling;
        this.freeFormatData = freeFormatData;
        this.callingPartyNumber = callingPartyNumber;
        this.destinationSubscriberNumber = destinationSubscriberNumber;
        this.cAMELSMSCAddress = cAMELSMSCAddress;
        this.smsReferenceNumber = smsReferenceNumber;
    
        if (this.gsm_SCFAddress !== undefined && (this.gsm_SCFAddress.length < 1 || this.gsm_SCFAddress.length > 9)) {
            throw new ASN1SizeError("CAMELSMSInformation.gsm_SCFAddress violates SIZE constraint");
        }
        if (this.serviceKey !== undefined && (this.serviceKey < 0 || this.serviceKey > 2147483647)) {
            throw new ASN1OverflowError("CAMELSMSInformation.serviceKey violates INTEGER range");
        }
        if (this.freeFormatData !== undefined && (this.freeFormatData.length < 1 || this.freeFormatData.length > 160)) {
            throw new ASN1SizeError("CAMELSMSInformation.freeFormatData violates SIZE constraint");
        }
        if (this.cAMELSMSCAddress !== undefined && (this.cAMELSMSCAddress.length < 1 || this.cAMELSMSCAddress.length > 20)) {
            throw new ASN1SizeError("CAMELSMSInformation.cAMELSMSCAddress violates SIZE constraint");
        }
        if (this.smsReferenceNumber !== undefined && (this.smsReferenceNumber.length < 1 || this.smsReferenceNumber.length > 8)) {
            throw new ASN1SizeError("CAMELSMSInformation.smsReferenceNumber violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a CAMELSMSInformation
     * @description
     *
     * This takes an `object` and converts it to a `CAMELSMSInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CAMELSMSInformation`.
     * @returns {CAMELSMSInformation}
     */
    public static _from_object (_o: { [_K in keyof (CAMELSMSInformation)]: (CAMELSMSInformation)[_K] }): CAMELSMSInformation {
        return new CAMELSMSInformation(_o.gsm_SCFAddress, _o.serviceKey, _o.defaultSMSHandling, _o.freeFormatData, _o.callingPartyNumber, _o.destinationSubscriberNumber, _o.cAMELSMSCAddress, _o.smsReferenceNumber);
    }

        /**
         * @summary The enum used as the type of the component `defaultSMSHandling`
         * @public
         * @static
         */

    public static _enum_for_defaultSMSHandling = _enum_for_CAMELSMSInformation_defaultSMSHandling;
}

/**
 * @summary The Leading Root Component Types of CAMELSMSInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CAMELSMSInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("gsm-SCFAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceKey", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("defaultSMSHandling", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("freeFormatData", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("destinationSubscriberNumber", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("cAMELSMSCAddress", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("smsReferenceNumber", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of CAMELSMSInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CAMELSMSInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CAMELSMSInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_CAMELSMSInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CAMELSMSInformation: $.ASN1Decoder<CAMELSMSInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CAMELSMSInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CAMELSMSInformation (el: _Element): CAMELSMSInformation {
    if (!_cached_decoder_for_CAMELSMSInformation) { _cached_decoder_for_CAMELSMSInformation = function (el: _Element): CAMELSMSInformation {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let gsm_SCFAddress: OPTIONAL<OCTET_STRING>;
    let serviceKey: OPTIONAL<INTEGER>;
    let defaultSMSHandling: OPTIONAL<CAMELSMSInformation_defaultSMSHandling>;
    let freeFormatData: OPTIONAL<OCTET_STRING>;
    let callingPartyNumber: OPTIONAL<OCTET_STRING>;
    let destinationSubscriberNumber: OPTIONAL<OCTET_STRING>;
    let cAMELSMSCAddress: OPTIONAL<OCTET_STRING>;
    let smsReferenceNumber: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "gsm-SCFAddress": (_el: _Element): void => { gsm_SCFAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "defaultSMSHandling": (_el: _Element): void => { defaultSMSHandling = $._decode_implicit<CAMELSMSInformation_defaultSMSHandling>(() => _decode_CAMELSMSInformation_defaultSMSHandling)(_el); },
        "freeFormatData": (_el: _Element): void => { freeFormatData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "destinationSubscriberNumber": (_el: _Element): void => { destinationSubscriberNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cAMELSMSCAddress": (_el: _Element): void => { cAMELSMSCAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "smsReferenceNumber": (_el: _Element): void => { smsReferenceNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_CAMELSMSInformation,
        _extension_additions_list_spec_for_CAMELSMSInformation,
        _root_component_type_list_2_spec_for_CAMELSMSInformation,
        undefined,
    );
    return new CAMELSMSInformation( /* SET_CONSTRUCTOR_CALL */
        gsm_SCFAddress,
        serviceKey,
        defaultSMSHandling,
        freeFormatData,
        callingPartyNumber,
        destinationSubscriberNumber,
        cAMELSMSCAddress,
        smsReferenceNumber
    );
}; }
    return _cached_decoder_for_CAMELSMSInformation(el);
}

let _cached_encoder_for_CAMELSMSInformation: $.ASN1Encoder<CAMELSMSInformation> | null = null;

/**
 * @summary Encodes a(n) CAMELSMSInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CAMELSMSInformation, encoded as an ASN.1 Element.
 */
export
function _encode_CAMELSMSInformation (value: CAMELSMSInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CAMELSMSInformation) { _cached_encoder_for_CAMELSMSInformation = function (value: CAMELSMSInformation, _elGetter: $.ASN1Encoder<CAMELSMSInformation>): _Element {
    const _components: _Element[] = [];
    if (value.gsm_SCFAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.gsm_SCFAddress, $.BER));
    }
    if (value.serviceKey !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.serviceKey, $.BER));
    }
    if (value.defaultSMSHandling !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CAMELSMSInformation_defaultSMSHandling, $.BER)(value.defaultSMSHandling, $.BER));
    }
    if (value.freeFormatData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.freeFormatData, $.BER));
    }
    if (value.callingPartyNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.callingPartyNumber, $.BER));
    }
    if (value.destinationSubscriberNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.destinationSubscriberNumber, $.BER));
    }
    if (value.cAMELSMSCAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.cAMELSMSCAddress, $.BER));
    }
    if (value.smsReferenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.smsReferenceNumber, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_CAMELSMSInformation(value, elGetter);
}


/* eslint-enable */
