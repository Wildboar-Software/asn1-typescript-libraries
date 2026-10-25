/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { type AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
// export { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
import { AForASSessionWithQoSResponseCode, _decode_AForASSessionWithQoSResponseCode, _encode_AForASSessionWithQoSResponseCode, _enum_for_AForASSessionWithQoSResponseCode } from "../TS33128Payloads/AForASSessionWithQoSResponseCode.ta.mjs";
// export { AForASSessionWithQoSResponseCode, _enum_for_AForASSessionWithQoSResponseCode, AForASSessionWithQoSResponseCode_oK200 /* IMPORTED_LONG_ENUMERATION_ITEM */, oK200 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_created201 /* IMPORTED_LONG_ENUMERATION_ITEM */, created201 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_noContent204 /* IMPORTED_LONG_ENUMERATION_ITEM */, noContent204 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_temporaryRedirect307 /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryRedirect307 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_permanentRedirect308 /* IMPORTED_LONG_ENUMERATION_ITEM */, permanentRedirect308 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_badRequest400 /* IMPORTED_LONG_ENUMERATION_ITEM */, badRequest400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_unauthorized401 /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorized401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_forbidden403 /* IMPORTED_LONG_ENUMERATION_ITEM */, forbidden403 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_notFound404 /* IMPORTED_LONG_ENUMERATION_ITEM */, notFound404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_notAcceptable406 /* IMPORTED_LONG_ENUMERATION_ITEM */, notAcceptable406 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_lengthRequired411 /* IMPORTED_LONG_ENUMERATION_ITEM */, lengthRequired411 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_unsupportedMediaType415 /* IMPORTED_LONG_ENUMERATION_ITEM */, unsupportedMediaType415 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_tooManyRequests429 /* IMPORTED_LONG_ENUMERATION_ITEM */, tooManyRequests429 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_internalServerError500 /* IMPORTED_LONG_ENUMERATION_ITEM */, internalServerError500 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_serviceUnavailable503 /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceUnavailable503 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AForASSessionWithQoSResponseCode, _encode_AForASSessionWithQoSResponseCode } from "../TS33128Payloads/AForASSessionWithQoSResponseCode.ta.mjs";


/**
 * @summary NEFAFSessionWithQoSNotification
 * @description
 * 
 * Table 7.7.6.2-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFAFSessionWithQoSNotification ::= SEQUENCE
 * {
 *     gPSI                                 [1] GPSI,
 *     aFID                                 [2] AFID,
 *     userPlaneNotificationData            [3] SBIType,
 *     aForASSessionWithQoSResponseCode     [4] AForASSessionWithQoSResponseCode
 * }
 * ```
 * 
 * @class
 */
export
class NEFAFSessionWithQoSNotification {
    /**
     * @summary `gPSI`.
     * @public
     * @readonly
     */
    readonly gPSI: GPSI;
    /**
     * @summary `aFID`.
     * @public
     * @readonly
     */
    readonly aFID: AFID;
    /**
     * @summary `userPlaneNotificationData`.
     * @public
     * @readonly
     */
    readonly userPlaneNotificationData: SBIType;
    /**
     * @summary `aForASSessionWithQoSResponseCode`.
     * @public
     * @readonly
     */
    readonly aForASSessionWithQoSResponseCode: AForASSessionWithQoSResponseCode;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        gPSI: GPSI,
        aFID: AFID,
        userPlaneNotificationData: SBIType,
        aForASSessionWithQoSResponseCode: AForASSessionWithQoSResponseCode,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.gPSI = gPSI;
        this.aFID = aFID;
        this.userPlaneNotificationData = userPlaneNotificationData;
        this.aForASSessionWithQoSResponseCode = aForASSessionWithQoSResponseCode;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NEFAFSessionWithQoSNotification
     * @description
     * 
     * This takes an `object` and converts it to a `NEFAFSessionWithQoSNotification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NEFAFSessionWithQoSNotification`.
     * @returns {NEFAFSessionWithQoSNotification}
     */
    public static _from_object (_o: { [_K in keyof (NEFAFSessionWithQoSNotification)]: (NEFAFSessionWithQoSNotification)[_K] }): NEFAFSessionWithQoSNotification {
        return new NEFAFSessionWithQoSNotification(_o.gPSI, _o.aFID, _o.userPlaneNotificationData, _o.aForASSessionWithQoSResponseCode, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `aForASSessionWithQoSResponseCode`
         * @public
         * @static
         */

    public static _enum_for_aForASSessionWithQoSResponseCode: typeof _enum_for_AForASSessionWithQoSResponseCode = _enum_for_AForASSessionWithQoSResponseCode;
}

/**
 * @summary The Leading Root Component Types of NEFAFSessionWithQoSNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NEFAFSessionWithQoSNotification: $.ComponentSpec[] = [
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aFID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("userPlaneNotificationData", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("aForASSessionWithQoSResponseCode", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of NEFAFSessionWithQoSNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NEFAFSessionWithQoSNotification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NEFAFSessionWithQoSNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NEFAFSessionWithQoSNotification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NEFAFSessionWithQoSNotification: $.ASN1Decoder<NEFAFSessionWithQoSNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEFAFSessionWithQoSNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEFAFSessionWithQoSNotification (el: _Element): NEFAFSessionWithQoSNotification {
    if (!_cached_decoder_for_NEFAFSessionWithQoSNotification) { _cached_decoder_for_NEFAFSessionWithQoSNotification = function (el: _Element): NEFAFSessionWithQoSNotification {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("NEFAFSessionWithQoSNotification contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "gPSI";
    sequence[1].name = "aFID";
    sequence[2].name = "userPlaneNotificationData";
    sequence[3].name = "aForASSessionWithQoSResponseCode";
    let gPSI!: GPSI;
    let aFID!: AFID;
    let userPlaneNotificationData!: SBIType;
    let aForASSessionWithQoSResponseCode!: AForASSessionWithQoSResponseCode;
    gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(sequence[0]);
    aFID = $._decode_implicit<AFID>(() => _decode_AFID)(sequence[1]);
    userPlaneNotificationData = $._decode_implicit<SBIType>(() => _decode_SBIType)(sequence[2]);
    aForASSessionWithQoSResponseCode = $._decode_implicit<AForASSessionWithQoSResponseCode>(() => _decode_AForASSessionWithQoSResponseCode)(sequence[3]);
    return new NEFAFSessionWithQoSNotification(
        gPSI,
        aFID,
        userPlaneNotificationData,
        aForASSessionWithQoSResponseCode,
        sequence.slice(4),
    );
}; }
    return _cached_decoder_for_NEFAFSessionWithQoSNotification(el);
}

let _cached_encoder_for_NEFAFSessionWithQoSNotification: $.ASN1Encoder<NEFAFSessionWithQoSNotification> | null = null;

/**
 * @summary Encodes a(n) NEFAFSessionWithQoSNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEFAFSessionWithQoSNotification, encoded as an ASN.1 Element.
 */
export
function _encode_NEFAFSessionWithQoSNotification (value: NEFAFSessionWithQoSNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEFAFSessionWithQoSNotification) { _cached_encoder_for_NEFAFSessionWithQoSNotification = function (value: NEFAFSessionWithQoSNotification, elGetter: $.ASN1Encoder<NEFAFSessionWithQoSNotification>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_AFID, $.BER)(value.aFID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SBIType, $.BER)(value.userPlaneNotificationData, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_AForASSessionWithQoSResponseCode, $.BER)(value.aForASSessionWithQoSResponseCode, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NEFAFSessionWithQoSNotification(value, elGetter);
}


/* eslint-enable */
