/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ESMCause, _decode_ESMCause, _encode_ESMCause } from "../TS33128Payloads/ESMCause.ta.mjs";
// export { ESMCause, _decode_ESMCause, _encode_ESMCause } from "../TS33128Payloads/ESMCause.ta.mjs";
import { Initiator, _enum_for_Initiator, Initiator_uE /* IMPORTED_LONG_ENUMERATION_ITEM */, uE /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_network /* IMPORTED_LONG_ENUMERATION_ITEM */, network /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Initiator, _encode_Initiator } from "../TS33128Payloads/Initiator.ta.mjs";
// export { Initiator, _enum_for_Initiator, Initiator_uE /* IMPORTED_LONG_ENUMERATION_ITEM */, uE /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_network /* IMPORTED_LONG_ENUMERATION_ITEM */, network /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Initiator, _encode_Initiator } from "../TS33128Payloads/Initiator.ta.mjs";
import { EPSSubscriberIDs, _decode_EPSSubscriberIDs, _encode_EPSSubscriberIDs } from "../TS33128Payloads/EPSSubscriberIDs.ta.mjs";
// export { EPSSubscriberIDs, _decode_EPSSubscriberIDs, _encode_EPSSubscriberIDs } from "../TS33128Payloads/EPSSubscriberIDs.ta.mjs";
import { IMSIUnauthenticatedIndication, _decode_IMSIUnauthenticatedIndication, _encode_IMSIUnauthenticatedIndication } from "../TS33128Payloads/IMSIUnauthenticatedIndication.ta.mjs";
// export { IMSIUnauthenticatedIndication, _decode_IMSIUnauthenticatedIndication, _encode_IMSIUnauthenticatedIndication } from "../TS33128Payloads/IMSIUnauthenticatedIndication.ta.mjs";
import { EPSPDNFailedProcedure, _decode_EPSPDNFailedProcedure, _encode_EPSPDNFailedProcedure } from "../TS33128Payloads/EPSPDNFailedProcedure.ta.mjs";
// export { EPSPDNFailedProcedure, _decode_EPSPDNFailedProcedure, _encode_EPSPDNFailedProcedure } from "../TS33128Payloads/EPSPDNFailedProcedure.ta.mjs";


/**
 * @summary EPSPDNUnsuccessfulProcedure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSPDNUnsuccessfulProcedure ::= SEQUENCE
 * {
 *     failureCause        [1] ESMCause,
 *     initiator           [2] Initiator,
 *     ePSSubscriberIDs    [3] EPSSubscriberIDs,
 *     iMSIUnauthenticated [4] IMSIUnauthenticatedIndication OPTIONAL,
 *     failedProcedure     [5] EPSPDNFailedProcedure
 * }
 * ```
 * 
 * @class
 */
export
class EPSPDNUnsuccessfulProcedure {
    constructor (
        /**
         * @summary `failureCause`.
         * @public
         * @readonly
         */
        readonly failureCause: ESMCause,
        /**
         * @summary `initiator`.
         * @public
         * @readonly
         */
        readonly initiator: Initiator,
        /**
         * @summary `ePSSubscriberIDs`.
         * @public
         * @readonly
         */
        readonly ePSSubscriberIDs: EPSSubscriberIDs,
        /**
         * @summary `iMSIUnauthenticated`.
         * @public
         * @readonly
         */
        readonly iMSIUnauthenticated: OPTIONAL<IMSIUnauthenticatedIndication>,
        /**
         * @summary `failedProcedure`.
         * @public
         * @readonly
         */
        readonly failedProcedure: EPSPDNFailedProcedure
    ) {}

    /**
     * @summary Restructures an object into a EPSPDNUnsuccessfulProcedure
     * @description
     * 
     * This takes an `object` and converts it to a `EPSPDNUnsuccessfulProcedure`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSPDNUnsuccessfulProcedure`.
     * @returns {EPSPDNUnsuccessfulProcedure}
     */
    public static _from_object (_o: { [_K in keyof (EPSPDNUnsuccessfulProcedure)]: (EPSPDNUnsuccessfulProcedure)[_K] }): EPSPDNUnsuccessfulProcedure {
        return new EPSPDNUnsuccessfulProcedure(_o.failureCause, _o.initiator, _o.ePSSubscriberIDs, _o.iMSIUnauthenticated, _o.failedProcedure);
    }

        /**
         * @summary The enum used as the type of the component `initiator`
         * @public
         * @static
         */

    public static _enum_for_initiator = _enum_for_Initiator;
}

/**
 * @summary The Leading Root Component Types of EPSPDNUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSPDNUnsuccessfulProcedure: $.ComponentSpec[] = [
    new $.ComponentSpec("failureCause", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("initiator", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ePSSubscriberIDs", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iMSIUnauthenticated", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("failedProcedure", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of EPSPDNUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSPDNUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSPDNUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSPDNUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSPDNUnsuccessfulProcedure: $.ASN1Decoder<EPSPDNUnsuccessfulProcedure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSPDNUnsuccessfulProcedure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSPDNUnsuccessfulProcedure (el: _Element): EPSPDNUnsuccessfulProcedure {
    if (!_cached_decoder_for_EPSPDNUnsuccessfulProcedure) { _cached_decoder_for_EPSPDNUnsuccessfulProcedure = function (el: _Element): EPSPDNUnsuccessfulProcedure {
    let failureCause!: ESMCause;
    let initiator!: Initiator;
    let ePSSubscriberIDs!: EPSSubscriberIDs;
    let iMSIUnauthenticated: OPTIONAL<IMSIUnauthenticatedIndication>;
    let failedProcedure!: EPSPDNFailedProcedure;
    const callbacks: $.DecodingMap = {
        "failureCause": (_el: _Element): void => { failureCause = $._decode_implicit<ESMCause>(() => _decode_ESMCause)(_el); },
        "initiator": (_el: _Element): void => { initiator = $._decode_implicit<Initiator>(() => _decode_Initiator)(_el); },
        "ePSSubscriberIDs": (_el: _Element): void => { ePSSubscriberIDs = $._decode_implicit<EPSSubscriberIDs>(() => _decode_EPSSubscriberIDs)(_el); },
        "iMSIUnauthenticated": (_el: _Element): void => { iMSIUnauthenticated = $._decode_implicit<IMSIUnauthenticatedIndication>(() => _decode_IMSIUnauthenticatedIndication)(_el); },
        "failedProcedure": (_el: _Element): void => { failedProcedure = $._decode_explicit<EPSPDNFailedProcedure>(() => _decode_EPSPDNFailedProcedure)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSPDNUnsuccessfulProcedure,
        _extension_additions_list_spec_for_EPSPDNUnsuccessfulProcedure,
        _root_component_type_list_2_spec_for_EPSPDNUnsuccessfulProcedure,
        undefined,
    );
    return new EPSPDNUnsuccessfulProcedure(
        failureCause,
        initiator,
        ePSSubscriberIDs,
        iMSIUnauthenticated,
        failedProcedure
    );
}; }
    return _cached_decoder_for_EPSPDNUnsuccessfulProcedure(el);
}

let _cached_encoder_for_EPSPDNUnsuccessfulProcedure: $.ASN1Encoder<EPSPDNUnsuccessfulProcedure> | null = null;

/**
 * @summary Encodes a(n) EPSPDNUnsuccessfulProcedure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSPDNUnsuccessfulProcedure, encoded as an ASN.1 Element.
 */
export
function _encode_EPSPDNUnsuccessfulProcedure (value: EPSPDNUnsuccessfulProcedure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSPDNUnsuccessfulProcedure) { _cached_encoder_for_EPSPDNUnsuccessfulProcedure = function (value: EPSPDNUnsuccessfulProcedure, elGetter: $.ASN1Encoder<EPSPDNUnsuccessfulProcedure>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ESMCause, $.BER)(value.failureCause, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Initiator, $.BER)(value.initiator, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_EPSSubscriberIDs, $.BER)(value.ePSSubscriberIDs, $.BER),
            /* IF_ABSENT  */ ((value.iMSIUnauthenticated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_IMSIUnauthenticatedIndication, $.BER)(value.iMSIUnauthenticated, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 5, () => _encode_EPSPDNFailedProcedure, $.BER)(value.failedProcedure, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPSPDNUnsuccessfulProcedure(value, elGetter);
}


/* eslint-enable */
