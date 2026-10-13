/* eslint-disable */
import {
    INTEGER,
    UTCTime,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";
// export { TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";
import { LIMODIFYreq_modificationType, _decode_LIMODIFYreq_modificationType, _encode_LIMODIFYreq_modificationType } from "../EN301040/LIMODIFYreq-modificationType.ta.mjs";
// export { LIMODIFYreq_modificationType, _decode_LIMODIFYreq_modificationType, _encode_LIMODIFYreq_modificationType } from "../EN301040/LIMODIFYreq-modificationType.ta.mjs";


/**
 * @summary LIMODIFYreq
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LIMODIFYreq ::= SEQUENCE {
 *     tLIInstanceid           TLIIdType,
 *     timestamp               UTCTime,
 *     modificationNumber        INTEGER,
 *     modificationType        CHOICE {
 *         -- The duplicate tags here are not problematic because this module uses AUTOMATIC TAGS
 *         halt                    BOOLEAN,
 *         reset                    BOOLEAN,
 *         expiryDateTime           UTCTime,
 *         targetname               VisibleString,
 *         additionaltargetdata       VisibleString,
 *         monitorServiceList       SEQUENCE OF ActivityType
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class LIMODIFYreq {
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
     * @summary `modificationNumber`.
     * @public
     * @readonly
     */
    readonly modificationNumber: INTEGER;
    /**
     * @summary `modificationType`.
     * @public
     * @readonly
     */
    readonly modificationType: LIMODIFYreq_modificationType;

    constructor (
        tLIInstanceid: TLIIdType,
        timestamp: UTCTime,
        modificationNumber: INTEGER,
        modificationType: LIMODIFYreq_modificationType
    ) {
        this.tLIInstanceid = tLIInstanceid;
        this.timestamp = timestamp;
        this.modificationNumber = modificationNumber;
        this.modificationType = modificationType;
    }

    /**
     * @summary Restructures an object into a LIMODIFYreq
     * @description
     * 
     * This takes an `object` and converts it to a `LIMODIFYreq`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LIMODIFYreq`.
     * @returns {LIMODIFYreq}
     */
    public static _from_object (_o: { [_K in keyof (LIMODIFYreq)]: (LIMODIFYreq)[_K] }): LIMODIFYreq {
        return new LIMODIFYreq(_o.tLIInstanceid, _o.timestamp, _o.modificationNumber, _o.modificationType);
    }


}

/**
 * @summary The Leading Root Component Types of LIMODIFYreq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LIMODIFYreq: $.ComponentSpec[] = [
    new $.ComponentSpec("tLIInstanceid", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("timestamp", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("modificationNumber", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("modificationType", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of LIMODIFYreq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LIMODIFYreq: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LIMODIFYreq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LIMODIFYreq: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LIMODIFYreq: $.ASN1Decoder<LIMODIFYreq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LIMODIFYreq
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LIMODIFYreq (el: _Element): LIMODIFYreq {
    if (!_cached_decoder_for_LIMODIFYreq) { _cached_decoder_for_LIMODIFYreq = function (el: _Element): LIMODIFYreq {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("LIMODIFYreq contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "tLIInstanceid";
    sequence[1].name = "timestamp";
    sequence[2].name = "modificationNumber";
    sequence[3].name = "modificationType";
    let tLIInstanceid!: TLIIdType;
    let timestamp!: UTCTime;
    let modificationNumber!: INTEGER;
    let modificationType!: LIMODIFYreq_modificationType;
    tLIInstanceid = _decode_TLIIdType(sequence[0]);
    timestamp = $._decodeUTCTime(sequence[1]);
    modificationNumber = $._decodeInteger(sequence[2]);
    modificationType = _decode_LIMODIFYreq_modificationType(sequence[3]);
    return new LIMODIFYreq(
        tLIInstanceid,
        timestamp,
        modificationNumber,
        modificationType,

    );
}; }
    return _cached_decoder_for_LIMODIFYreq(el);
}

let _cached_encoder_for_LIMODIFYreq: $.ASN1Encoder<LIMODIFYreq> | null = null;

/**
 * @summary Encodes a(n) LIMODIFYreq into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LIMODIFYreq, encoded as an ASN.1 Element.
 */
export
function _encode_LIMODIFYreq (value: LIMODIFYreq, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LIMODIFYreq) { _cached_encoder_for_LIMODIFYreq = function (value: LIMODIFYreq, elGetter: $.ASN1Encoder<LIMODIFYreq>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TLIIdType, $.BER)(value.tLIInstanceid, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTCTime, $.BER)(value.timestamp, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.modificationNumber, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_LIMODIFYreq_modificationType, $.BER)(value.modificationType, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_LIMODIFYreq(value, elGetter);
}


/* eslint-enable */
