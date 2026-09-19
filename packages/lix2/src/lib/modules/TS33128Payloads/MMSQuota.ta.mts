/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSQuotaUnit, _decode_MMSQuotaUnit, _encode_MMSQuotaUnit, _enum_for_MMSQuotaUnit } from "../TS33128Payloads/MMSQuotaUnit.ta.mjs";
// export { MMSQuotaUnit, _enum_for_MMSQuotaUnit, MMSQuotaUnit_numMessages /* IMPORTED_LONG_ENUMERATION_ITEM */, numMessages /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSQuotaUnit_bytes /* IMPORTED_LONG_ENUMERATION_ITEM */, bytes /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSQuotaUnit, _encode_MMSQuotaUnit } from "../TS33128Payloads/MMSQuotaUnit.ta.mjs";


/**
 * @summary MMSQuota
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSQuota ::= SEQUENCE
 * {
 *     quota     [1] INTEGER,
 *     quotaUnit [2] MMSQuotaUnit
 * }
 * ```
 * 
 * @class
 */
export
class MMSQuota {
    constructor (
        /**
         * @summary `quota`.
         * @public
         * @readonly
         */
        readonly quota: INTEGER,
        /**
         * @summary `quotaUnit`.
         * @public
         * @readonly
         */
        readonly quotaUnit: MMSQuotaUnit
    ) {}

    /**
     * @summary Restructures an object into a MMSQuota
     * @description
     * 
     * This takes an `object` and converts it to a `MMSQuota`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSQuota`.
     * @returns {MMSQuota}
     */
    public static _from_object (_o: { [_K in keyof (MMSQuota)]: (MMSQuota)[_K] }): MMSQuota {
        return new MMSQuota(_o.quota, _o.quotaUnit);
    }

        /**
         * @summary The enum used as the type of the component `quotaUnit`
         * @public
         * @static
         */

    public static _enum_for_quotaUnit = _enum_for_MMSQuotaUnit;
}

/**
 * @summary The Leading Root Component Types of MMSQuota
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSQuota: $.ComponentSpec[] = [
    new $.ComponentSpec("quota", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("quotaUnit", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MMSQuota
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSQuota: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSQuota
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSQuota: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSQuota: $.ASN1Decoder<MMSQuota> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSQuota
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSQuota (el: _Element): MMSQuota {
    if (!_cached_decoder_for_MMSQuota) { _cached_decoder_for_MMSQuota = function (el: _Element): MMSQuota {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MMSQuota contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "quota";
    sequence[1].name = "quotaUnit";
    let quota!: INTEGER;
    let quotaUnit!: MMSQuotaUnit;
    quota = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    quotaUnit = $._decode_implicit<MMSQuotaUnit>(() => _decode_MMSQuotaUnit)(sequence[1]);
    return new MMSQuota(
        quota,
        quotaUnit,

    );
}; }
    return _cached_decoder_for_MMSQuota(el);
}

let _cached_encoder_for_MMSQuota: $.ASN1Encoder<MMSQuota> | null = null;

/**
 * @summary Encodes a(n) MMSQuota into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSQuota, encoded as an ASN.1 Element.
 */
export
function _encode_MMSQuota (value: MMSQuota, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSQuota) { _cached_encoder_for_MMSQuota = function (value: MMSQuota, elGetter: $.ASN1Encoder<MMSQuota>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.quota, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSQuotaUnit, $.BER)(value.quotaUnit, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSQuota(value, elGetter);
}


/* eslint-enable */
