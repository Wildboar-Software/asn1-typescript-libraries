/* eslint-disable */
import {
    UTCTime,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";
// export { TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";
import { StatusType, _decode_StatusType, _encode_StatusType, _enum_for_StatusType } from "../EN301040/StatusType.ta.mjs";
// export { StatusType, _enum_for_StatusType, StatusType_networkFullyAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, networkFullyAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, StatusType_networkErrorsAffectingIntercept /* IMPORTED_LONG_ENUMERATION_ITEM */, networkErrorsAffectingIntercept /* IMPORTED_SHORT_ENUMERATION_ITEM */, StatusType_reconfigurationInProgress /* IMPORTED_LONG_ENUMERATION_ITEM */, reconfigurationInProgress /* IMPORTED_SHORT_ENUMERATION_ITEM */, StatusType_sessionExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, sessionExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, StatusType_gatewayServicesUnavailable /* IMPORTED_LONG_ENUMERATION_ITEM */, gatewayServicesUnavailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_StatusType, _encode_StatusType } from "../EN301040/StatusType.ta.mjs";


/**
 * @summary LISTATUSind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LISTATUSind ::= SEQUENCE {
 *         tLIInstanceid           TLIIdType,
 *         timestamp               UTCTime,
 *         tETRASysStatus          StatusType
 * }
 * ```
 * 
 * @class
 */
export
class LISTATUSind {
    /**
     * @summary `tLIInstanceid`.
     * @public
     * @readonly
     */
    readonly tLIInstanceid: TLIIdType;
    /**
     * @summary `timestamp`.
     * @public
     * @readonly
     */
    readonly timestamp: UTCTime;
    /**
     * @summary `tETRASysStatus`.
     * @public
     * @readonly
     */
    readonly tETRASysStatus: StatusType;

    constructor (
        tLIInstanceid: TLIIdType,
        timestamp: UTCTime,
        tETRASysStatus: StatusType
    ) {
        this.tLIInstanceid = tLIInstanceid;
        this.timestamp = timestamp;
        this.tETRASysStatus = tETRASysStatus;
    }

    /**
     * @summary Restructures an object into a LISTATUSind
     * @description
     * 
     * This takes an `object` and converts it to a `LISTATUSind`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LISTATUSind`.
     * @returns {LISTATUSind}
     */
    public static _from_object (_o: { [_K in keyof (LISTATUSind)]: (LISTATUSind)[_K] }): LISTATUSind {
        return new LISTATUSind(_o.tLIInstanceid, _o.timestamp, _o.tETRASysStatus);
    }

        /**
         * @summary The enum used as the type of the component `tETRASysStatus`
         * @public
         * @static
         */

    public static _enum_for_tETRASysStatus = _enum_for_StatusType;
}

/**
 * @summary The Leading Root Component Types of LISTATUSind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LISTATUSind: $.ComponentSpec[] = [
    new $.ComponentSpec("tLIInstanceid", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("timestamp", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tETRASysStatus", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of LISTATUSind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LISTATUSind: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LISTATUSind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LISTATUSind: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LISTATUSind: $.ASN1Decoder<LISTATUSind> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LISTATUSind
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LISTATUSind (el: _Element): LISTATUSind {
    if (!_cached_decoder_for_LISTATUSind) { _cached_decoder_for_LISTATUSind = function (el: _Element): LISTATUSind {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("LISTATUSind contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "tLIInstanceid";
    sequence[1].name = "timestamp";
    sequence[2].name = "tETRASysStatus";
    let tLIInstanceid!: TLIIdType;
    let timestamp!: UTCTime;
    let tETRASysStatus!: StatusType;
    tLIInstanceid = _decode_TLIIdType(sequence[0]);
    timestamp = $._decodeUTCTime(sequence[1]);
    tETRASysStatus = _decode_StatusType(sequence[2]);
    return new LISTATUSind(
        tLIInstanceid,
        timestamp,
        tETRASysStatus,

    );
}; }
    return _cached_decoder_for_LISTATUSind(el);
}

let _cached_encoder_for_LISTATUSind: $.ASN1Encoder<LISTATUSind> | null = null;

/**
 * @summary Encodes a(n) LISTATUSind into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LISTATUSind, encoded as an ASN.1 Element.
 */
export
function _encode_LISTATUSind (value: LISTATUSind, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LISTATUSind) { _cached_encoder_for_LISTATUSind = function (value: LISTATUSind, elGetter: $.ASN1Encoder<LISTATUSind>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TLIIdType, $.BER)(value.tLIInstanceid, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTCTime, $.BER)(value.timestamp, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_StatusType, $.BER)(value.tETRASysStatus, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_LISTATUSind(value, elGetter);
}


/* eslint-enable */
