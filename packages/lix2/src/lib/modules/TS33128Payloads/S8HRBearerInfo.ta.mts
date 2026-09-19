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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
import { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { APN, _decode_APN, _encode_APN } from "../TS33128Payloads/APN.ta.mjs";
// export { APN, _decode_APN, _encode_APN } from "../TS33128Payloads/APN.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
import { S8HRMessageCause, _enum_for_S8HRMessageCause, S8HRMessageCause_bearerActivated /* IMPORTED_LONG_ENUMERATION_ITEM */, bearerActivated /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_bearerModified /* IMPORTED_LONG_ENUMERATION_ITEM */, bearerModified /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_bearerDeleted /* IMPORTED_LONG_ENUMERATION_ITEM */, bearerDeleted /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_pDNDisconnected /* IMPORTED_LONG_ENUMERATION_ITEM */, pDNDisconnected /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_updatedLocationAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, updatedLocationAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_sGWChanged /* IMPORTED_LONG_ENUMERATION_ITEM */, sGWChanged /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_hRLIEnabled /* IMPORTED_LONG_ENUMERATION_ITEM */, hRLIEnabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_S8HRMessageCause, _encode_S8HRMessageCause } from "../TS33128Payloads/S8HRMessageCause.ta.mjs";
// export { S8HRMessageCause, _enum_for_S8HRMessageCause, S8HRMessageCause_bearerActivated /* IMPORTED_LONG_ENUMERATION_ITEM */, bearerActivated /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_bearerModified /* IMPORTED_LONG_ENUMERATION_ITEM */, bearerModified /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_bearerDeleted /* IMPORTED_LONG_ENUMERATION_ITEM */, bearerDeleted /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_pDNDisconnected /* IMPORTED_LONG_ENUMERATION_ITEM */, pDNDisconnected /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_updatedLocationAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, updatedLocationAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_sGWChanged /* IMPORTED_LONG_ENUMERATION_ITEM */, sGWChanged /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_hRLIEnabled /* IMPORTED_LONG_ENUMERATION_ITEM */, hRLIEnabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_S8HRMessageCause, _encode_S8HRMessageCause } from "../TS33128Payloads/S8HRMessageCause.ta.mjs";


/**
 * @summary S8HRBearerInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * S8HRBearerInfo ::= SEQUENCE
 * {
 *     iMSI                            [1] IMSI,
 *     iMEI                            [2] IMEI OPTIONAL,
 *     bearerID                        [3] EPSBearerID,
 *     linkedBearerID                  [4] EPSBearerID OPTIONAL,
 *     location                        [5] Location OPTIONAL,
 *     aPN                             [6] APN OPTIONAL,
 *     sGWIPAddress                    [7] IPAddress OPTIONAL,
 *     messageCause                    [8] S8HRMessageCause
 * }
 * ```
 * 
 * @class
 */
export
class S8HRBearerInfo {
    constructor (
        /**
         * @summary `iMSI`.
         * @public
         * @readonly
         */
        readonly iMSI: IMSI,
        /**
         * @summary `iMEI`.
         * @public
         * @readonly
         */
        readonly iMEI: OPTIONAL<IMEI>,
        /**
         * @summary `bearerID`.
         * @public
         * @readonly
         */
        readonly bearerID: EPSBearerID,
        /**
         * @summary `linkedBearerID`.
         * @public
         * @readonly
         */
        readonly linkedBearerID: OPTIONAL<EPSBearerID>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `aPN`.
         * @public
         * @readonly
         */
        readonly aPN: OPTIONAL<APN>,
        /**
         * @summary `sGWIPAddress`.
         * @public
         * @readonly
         */
        readonly sGWIPAddress: OPTIONAL<IPAddress>,
        /**
         * @summary `messageCause`.
         * @public
         * @readonly
         */
        readonly messageCause: S8HRMessageCause
    ) {}

    /**
     * @summary Restructures an object into a S8HRBearerInfo
     * @description
     * 
     * This takes an `object` and converts it to a `S8HRBearerInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `S8HRBearerInfo`.
     * @returns {S8HRBearerInfo}
     */
    public static _from_object (_o: { [_K in keyof (S8HRBearerInfo)]: (S8HRBearerInfo)[_K] }): S8HRBearerInfo {
        return new S8HRBearerInfo(_o.iMSI, _o.iMEI, _o.bearerID, _o.linkedBearerID, _o.location, _o.aPN, _o.sGWIPAddress, _o.messageCause);
    }

        /**
         * @summary The enum used as the type of the component `messageCause`
         * @public
         * @static
         */

    public static _enum_for_messageCause = _enum_for_S8HRMessageCause;
}

/**
 * @summary The Leading Root Component Types of S8HRBearerInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_S8HRBearerInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bearerID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("linkedBearerID", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("aPN", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sGWIPAddress", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("messageCause", false, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of S8HRBearerInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_S8HRBearerInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of S8HRBearerInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_S8HRBearerInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_S8HRBearerInfo: $.ASN1Decoder<S8HRBearerInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) S8HRBearerInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_S8HRBearerInfo (el: _Element): S8HRBearerInfo {
    if (!_cached_decoder_for_S8HRBearerInfo) { _cached_decoder_for_S8HRBearerInfo = function (el: _Element): S8HRBearerInfo {
    let iMSI!: IMSI;
    let iMEI: OPTIONAL<IMEI>;
    let bearerID!: EPSBearerID;
    let linkedBearerID: OPTIONAL<EPSBearerID>;
    let location: OPTIONAL<Location>;
    let aPN: OPTIONAL<APN>;
    let sGWIPAddress: OPTIONAL<IPAddress>;
    let messageCause!: S8HRMessageCause;
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "bearerID": (_el: _Element): void => { bearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); },
        "linkedBearerID": (_el: _Element): void => { linkedBearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "aPN": (_el: _Element): void => { aPN = $._decode_implicit<APN>(() => _decode_APN)(_el); },
        "sGWIPAddress": (_el: _Element): void => { sGWIPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "messageCause": (_el: _Element): void => { messageCause = $._decode_implicit<S8HRMessageCause>(() => _decode_S8HRMessageCause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_S8HRBearerInfo,
        _extension_additions_list_spec_for_S8HRBearerInfo,
        _root_component_type_list_2_spec_for_S8HRBearerInfo,
        undefined,
    );
    return new S8HRBearerInfo(
        iMSI,
        iMEI,
        bearerID,
        linkedBearerID,
        location,
        aPN,
        sGWIPAddress,
        messageCause
    );
}; }
    return _cached_decoder_for_S8HRBearerInfo(el);
}

let _cached_encoder_for_S8HRBearerInfo: $.ASN1Encoder<S8HRBearerInfo> | null = null;

/**
 * @summary Encodes a(n) S8HRBearerInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The S8HRBearerInfo, encoded as an ASN.1 Element.
 */
export
function _encode_S8HRBearerInfo (value: S8HRBearerInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_S8HRBearerInfo) { _cached_encoder_for_S8HRBearerInfo = function (value: S8HRBearerInfo, elGetter: $.ASN1Encoder<S8HRBearerInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER),
            /* IF_ABSENT  */ ((value.iMEI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IMEI, $.BER)(value.iMEI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_EPSBearerID, $.BER)(value.bearerID, $.BER),
            /* IF_ABSENT  */ ((value.linkedBearerID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_EPSBearerID, $.BER)(value.linkedBearerID, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.aPN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_APN, $.BER)(value.aPN, $.BER)),
            /* IF_ABSENT  */ ((value.sGWIPAddress === undefined) ? undefined : $._encode_explicit(_TagClass.context, 7, () => _encode_IPAddress, $.BER)(value.sGWIPAddress, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_S8HRMessageCause, $.BER)(value.messageCause, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_S8HRBearerInfo(value, elGetter);
}


/* eslint-enable */
