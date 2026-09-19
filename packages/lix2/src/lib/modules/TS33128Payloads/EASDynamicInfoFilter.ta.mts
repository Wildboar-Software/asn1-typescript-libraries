/* eslint-disable */
import {
    BOOLEAN,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";
// export { EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";


/**
 * @summary EASDynamicInfoFilter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASDynamicInfoFilter ::= SEQUENCE
 * {
 *     eASId          [1] EASID,
 *     eASStatus      [2] BOOLEAN,
 *     eASAcIDs       [3] BOOLEAN,
 *     eASDesc        [4] BOOLEAN,
 *     eASPt          [5] BOOLEAN,
 *     eASFeature     [6] BOOLEAN,
 *     eASSchedule    [7] BOOLEAN,
 *     eASSvcArea     [8] BOOLEAN,
 *     eASSvcKpi      [9] BOOLEAN,
 *     eASSvcCont     [10] BOOLEAN
 * }
 * ```
 * 
 * @class
 */
export
class EASDynamicInfoFilter {
    constructor (
        /**
         * @summary `eASId`.
         * @public
         * @readonly
         */
        readonly eASId: EASID,
        /**
         * @summary `eASStatus`.
         * @public
         * @readonly
         */
        readonly eASStatus: BOOLEAN,
        /**
         * @summary `eASAcIDs`.
         * @public
         * @readonly
         */
        readonly eASAcIDs: BOOLEAN,
        /**
         * @summary `eASDesc`.
         * @public
         * @readonly
         */
        readonly eASDesc: BOOLEAN,
        /**
         * @summary `eASPt`.
         * @public
         * @readonly
         */
        readonly eASPt: BOOLEAN,
        /**
         * @summary `eASFeature`.
         * @public
         * @readonly
         */
        readonly eASFeature: BOOLEAN,
        /**
         * @summary `eASSchedule`.
         * @public
         * @readonly
         */
        readonly eASSchedule: BOOLEAN,
        /**
         * @summary `eASSvcArea`.
         * @public
         * @readonly
         */
        readonly eASSvcArea: BOOLEAN,
        /**
         * @summary `eASSvcKpi`.
         * @public
         * @readonly
         */
        readonly eASSvcKpi: BOOLEAN,
        /**
         * @summary `eASSvcCont`.
         * @public
         * @readonly
         */
        readonly eASSvcCont: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a EASDynamicInfoFilter
     * @description
     * 
     * This takes an `object` and converts it to a `EASDynamicInfoFilter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EASDynamicInfoFilter`.
     * @returns {EASDynamicInfoFilter}
     */
    public static _from_object (_o: { [_K in keyof (EASDynamicInfoFilter)]: (EASDynamicInfoFilter)[_K] }): EASDynamicInfoFilter {
        return new EASDynamicInfoFilter(_o.eASId, _o.eASStatus, _o.eASAcIDs, _o.eASDesc, _o.eASPt, _o.eASFeature, _o.eASSchedule, _o.eASSvcArea, _o.eASSvcKpi, _o.eASSvcCont);
    }


}

/**
 * @summary The Leading Root Component Types of EASDynamicInfoFilter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EASDynamicInfoFilter: $.ComponentSpec[] = [
    new $.ComponentSpec("eASId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eASStatus", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eASAcIDs", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("eASDesc", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eASPt", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("eASFeature", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("eASSchedule", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("eASSvcArea", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("eASSvcKpi", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("eASSvcCont", false, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of EASDynamicInfoFilter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EASDynamicInfoFilter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EASDynamicInfoFilter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EASDynamicInfoFilter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EASDynamicInfoFilter: $.ASN1Decoder<EASDynamicInfoFilter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EASDynamicInfoFilter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EASDynamicInfoFilter (el: _Element): EASDynamicInfoFilter {
    if (!_cached_decoder_for_EASDynamicInfoFilter) { _cached_decoder_for_EASDynamicInfoFilter = function (el: _Element): EASDynamicInfoFilter {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 10) {
        throw new _ConstructionError("EASDynamicInfoFilter contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eASId";
    sequence[1].name = "eASStatus";
    sequence[2].name = "eASAcIDs";
    sequence[3].name = "eASDesc";
    sequence[4].name = "eASPt";
    sequence[5].name = "eASFeature";
    sequence[6].name = "eASSchedule";
    sequence[7].name = "eASSvcArea";
    sequence[8].name = "eASSvcKpi";
    sequence[9].name = "eASSvcCont";
    let eASId!: EASID;
    let eASStatus!: BOOLEAN;
    let eASAcIDs!: BOOLEAN;
    let eASDesc!: BOOLEAN;
    let eASPt!: BOOLEAN;
    let eASFeature!: BOOLEAN;
    let eASSchedule!: BOOLEAN;
    let eASSvcArea!: BOOLEAN;
    let eASSvcKpi!: BOOLEAN;
    let eASSvcCont!: BOOLEAN;
    eASId = $._decode_implicit<EASID>(() => _decode_EASID)(sequence[0]);
    eASStatus = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[1]);
    eASAcIDs = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[2]);
    eASDesc = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[3]);
    eASPt = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[4]);
    eASFeature = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[5]);
    eASSchedule = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[6]);
    eASSvcArea = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[7]);
    eASSvcKpi = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[8]);
    eASSvcCont = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[9]);
    return new EASDynamicInfoFilter(
        eASId,
        eASStatus,
        eASAcIDs,
        eASDesc,
        eASPt,
        eASFeature,
        eASSchedule,
        eASSvcArea,
        eASSvcKpi,
        eASSvcCont,

    );
}; }
    return _cached_decoder_for_EASDynamicInfoFilter(el);
}

let _cached_encoder_for_EASDynamicInfoFilter: $.ASN1Encoder<EASDynamicInfoFilter> | null = null;

/**
 * @summary Encodes a(n) EASDynamicInfoFilter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EASDynamicInfoFilter, encoded as an ASN.1 Element.
 */
export
function _encode_EASDynamicInfoFilter (value: EASDynamicInfoFilter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EASDynamicInfoFilter) { _cached_encoder_for_EASDynamicInfoFilter = function (value: EASDynamicInfoFilter, elGetter: $.ASN1Encoder<EASDynamicInfoFilter>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EASID, $.BER)(value.eASId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.eASStatus, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.eASAcIDs, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.eASDesc, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.eASPt, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.eASFeature, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.eASSchedule, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.eASSvcArea, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeBoolean, $.BER)(value.eASSvcKpi, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeBoolean, $.BER)(value.eASSvcCont, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EASDynamicInfoFilter(value, elGetter);
}


/* eslint-enable */
