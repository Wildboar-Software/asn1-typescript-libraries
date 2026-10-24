/* eslint-disable */
import {
    type INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PreemptionCapability, _decode_PreemptionCapability, _encode_PreemptionCapability, _enum_for_PreemptionCapability } from "../CHFChargingDataTypes/PreemptionCapability.ta.mjs";
import { PreemptionVulnerability, _decode_PreemptionVulnerability, _encode_PreemptionVulnerability, _enum_for_PreemptionVulnerability } from "../CHFChargingDataTypes/PreemptionVulnerability.ta.mjs";


/**
 * @summary AllocationRetentionPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AllocationRetentionPriority ::= SEQUENCE {
 *    priorityLevel             [1] IMPLICIT INTEGER,
 *    preemptionCapability      [2] IMPLICIT PreemptionCapability,
 *    preemptionVulnerability   [3] IMPLICIT PreemptionVulnerability}
 * ```
 * 
 * @class
 */
export
class AllocationRetentionPriority {
    /**
     * @summary `priorityLevel`.
     * @public
     * @readonly
     */
    readonly priorityLevel: INTEGER;
    /**
     * @summary `preemptionCapability`.
     * @public
     * @readonly
     */
    readonly preemptionCapability: PreemptionCapability;
    /**
     * @summary `preemptionVulnerability`.
     * @public
     * @readonly
     */
    readonly preemptionVulnerability: PreemptionVulnerability;

    constructor (
        priorityLevel: INTEGER,
        preemptionCapability: PreemptionCapability,
        preemptionVulnerability: PreemptionVulnerability
    ) {
        this.priorityLevel = priorityLevel;
        this.preemptionCapability = preemptionCapability;
        this.preemptionVulnerability = preemptionVulnerability;
    }

    /**
     * @summary Restructures an object into a AllocationRetentionPriority
     * @description
     * 
     * This takes an `object` and converts it to a `AllocationRetentionPriority`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AllocationRetentionPriority`.
     * @returns {AllocationRetentionPriority}
     */
    public static _from_object (_o: { [_K in keyof (AllocationRetentionPriority)]: (AllocationRetentionPriority)[_K] }): AllocationRetentionPriority {
        return new AllocationRetentionPriority(_o.priorityLevel, _o.preemptionCapability, _o.preemptionVulnerability);
    }

        /**
         * @summary The enum used as the type of the component `preemptionCapability`
         * @public
         * @static
         */

    public static _enum_for_preemptionCapability = _enum_for_PreemptionCapability;        /**
         * @summary The enum used as the type of the component `preemptionVulnerability`
         * @public
         * @static
         */

    public static _enum_for_preemptionVulnerability = _enum_for_PreemptionVulnerability;
}

/**
 * @summary The Leading Root Component Types of AllocationRetentionPriority
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AllocationRetentionPriority: $.ComponentSpec[] = [
    new $.ComponentSpec("priorityLevel", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("preemptionCapability", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("preemptionVulnerability", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AllocationRetentionPriority
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AllocationRetentionPriority: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AllocationRetentionPriority
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AllocationRetentionPriority: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AllocationRetentionPriority: $.ASN1Decoder<AllocationRetentionPriority> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AllocationRetentionPriority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AllocationRetentionPriority (el: _Element): AllocationRetentionPriority {
    if (!_cached_decoder_for_AllocationRetentionPriority) { _cached_decoder_for_AllocationRetentionPriority = function (el: _Element): AllocationRetentionPriority {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("AllocationRetentionPriority contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "priorityLevel";
    sequence[1].name = "preemptionCapability";
    sequence[2].name = "preemptionVulnerability";
    const priorityLevel: INTEGER = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    const preemptionCapability: PreemptionCapability = $._decode_implicit<PreemptionCapability>(() => _decode_PreemptionCapability)(sequence[1]);
    const preemptionVulnerability: PreemptionVulnerability = $._decode_implicit<PreemptionVulnerability>(() => _decode_PreemptionVulnerability)(sequence[2]);
    return new AllocationRetentionPriority(
        priorityLevel,
        preemptionCapability,
        preemptionVulnerability,

    );
}; }
    return _cached_decoder_for_AllocationRetentionPriority(el);
}

let _cached_encoder_for_AllocationRetentionPriority: $.ASN1Encoder<AllocationRetentionPriority> | null = null;

/**
 * @summary Encodes a(n) AllocationRetentionPriority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllocationRetentionPriority, encoded as an ASN.1 Element.
 */
export
function _encode_AllocationRetentionPriority (value: AllocationRetentionPriority, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AllocationRetentionPriority) { _cached_encoder_for_AllocationRetentionPriority = function (value: AllocationRetentionPriority, _elGetter: $.ASN1Encoder<AllocationRetentionPriority>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.priorityLevel, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PreemptionCapability, $.BER)(value.preemptionCapability, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PreemptionVulnerability, $.BER)(value.preemptionVulnerability, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_AllocationRetentionPriority(value, elGetter);
}


/* eslint-enable */
