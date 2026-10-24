/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AllocationRetentionPriority, _decode_AllocationRetentionPriority, _encode_AllocationRetentionPriority } from "../CHFChargingDataTypes/AllocationRetentionPriority.ta.mjs";


/**
 * @summary SubscribedQoSInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscribedQoSInformation ::= SEQUENCE {
 *    fiveQi          [1] IMPLICIT INTEGER,
 *    aRP             [2] IMPLICIT AllocationRetentionPriority OPTIONAL,
 *    priorityLevel   [3] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SubscribedQoSInformation {
    /**
     * @summary `fiveQi`.
     * @public
     * @readonly
     */
    readonly fiveQi: INTEGER;
    /**
     * @summary `aRP`.
     * @public
     * @readonly
     */
    readonly aRP: OPTIONAL<AllocationRetentionPriority>;
    /**
     * @summary `priorityLevel`.
     * @public
     * @readonly
     */
    readonly priorityLevel: OPTIONAL<INTEGER>;

    constructor (
        fiveQi: INTEGER,
        aRP?: OPTIONAL<AllocationRetentionPriority>,
        priorityLevel?: OPTIONAL<INTEGER>
    ) {
        this.fiveQi = fiveQi;
        this.aRP = aRP;
        this.priorityLevel = priorityLevel;
    }

    /**
     * @summary Restructures an object into a SubscribedQoSInformation
     * @description
     * 
     * This takes an `object` and converts it to a `SubscribedQoSInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubscribedQoSInformation`.
     * @returns {SubscribedQoSInformation}
     */
    public static _from_object (_o: { [_K in keyof (SubscribedQoSInformation)]: (SubscribedQoSInformation)[_K] }): SubscribedQoSInformation {
        return new SubscribedQoSInformation(_o.fiveQi, _o.aRP, _o.priorityLevel);
    }


}

/**
 * @summary The Leading Root Component Types of SubscribedQoSInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SubscribedQoSInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("fiveQi", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aRP", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("priorityLevel", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of SubscribedQoSInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SubscribedQoSInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SubscribedQoSInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SubscribedQoSInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SubscribedQoSInformation: $.ASN1Decoder<SubscribedQoSInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscribedQoSInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscribedQoSInformation (el: _Element): SubscribedQoSInformation {
    if (!_cached_decoder_for_SubscribedQoSInformation) { _cached_decoder_for_SubscribedQoSInformation = function (el: _Element): SubscribedQoSInformation {
    let fiveQi!: INTEGER;
    let aRP: OPTIONAL<AllocationRetentionPriority>;
    let priorityLevel: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "fiveQi": (_el: _Element): void => { fiveQi = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "aRP": (_el: _Element): void => { aRP = $._decode_implicit<AllocationRetentionPriority>(() => _decode_AllocationRetentionPriority)(_el); },
        "priorityLevel": (_el: _Element): void => { priorityLevel = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SubscribedQoSInformation,
        _extension_additions_list_spec_for_SubscribedQoSInformation,
        _root_component_type_list_2_spec_for_SubscribedQoSInformation,
        undefined,
    );
    return new SubscribedQoSInformation(
        fiveQi,
        aRP,
        priorityLevel
    );
}; }
    return _cached_decoder_for_SubscribedQoSInformation(el);
}

let _cached_encoder_for_SubscribedQoSInformation: $.ASN1Encoder<SubscribedQoSInformation> | null = null;

/**
 * @summary Encodes a(n) SubscribedQoSInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscribedQoSInformation, encoded as an ASN.1 Element.
 */
export
function _encode_SubscribedQoSInformation (value: SubscribedQoSInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscribedQoSInformation) { _cached_encoder_for_SubscribedQoSInformation = function (value: SubscribedQoSInformation, _elGetter: $.ASN1Encoder<SubscribedQoSInformation>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.fiveQi, $.BER));
    if (value.aRP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_AllocationRetentionPriority, $.BER)(value.aRP, $.BER));
    }
    if (value.priorityLevel !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.priorityLevel, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SubscribedQoSInformation(value, elGetter);
}


/* eslint-enable */
