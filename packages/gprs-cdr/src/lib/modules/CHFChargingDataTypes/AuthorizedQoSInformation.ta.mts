/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AllocationRetentionPriority, _decode_AllocationRetentionPriority, _encode_AllocationRetentionPriority } from "../CHFChargingDataTypes/AllocationRetentionPriority.ta.mjs";
// export { AllocationRetentionPriority, _decode_AllocationRetentionPriority, _encode_AllocationRetentionPriority } from "../CHFChargingDataTypes/AllocationRetentionPriority.ta.mjs";


/**
 * @summary AuthorizedQoSInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthorizedQoSInformation ::= SEQUENCE {
 *    fiveQi            [1] IMPLICIT INTEGER,
 *    aRP               [2] IMPLICIT AllocationRetentionPriority,
 *    priorityLevel     [3] IMPLICIT INTEGER OPTIONAL,
 *    averWindow        [4] IMPLICIT INTEGER OPTIONAL,
 *    maxDataBurstVol   [5] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class AuthorizedQoSInformation {
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
    readonly aRP: AllocationRetentionPriority;
    /**
     * @summary `priorityLevel`.
     * @public
     * @readonly
     */
    readonly priorityLevel: OPTIONAL<INTEGER>;
    /**
     * @summary `averWindow`.
     * @public
     * @readonly
     */
    readonly averWindow: OPTIONAL<INTEGER>;
    /**
     * @summary `maxDataBurstVol`.
     * @public
     * @readonly
     */
    readonly maxDataBurstVol: OPTIONAL<INTEGER>;

    constructor (
        fiveQi: INTEGER,
        aRP: AllocationRetentionPriority,
        priorityLevel: OPTIONAL<INTEGER>,
        averWindow: OPTIONAL<INTEGER>,
        maxDataBurstVol: OPTIONAL<INTEGER>
    ) {
        this.fiveQi = fiveQi;
        this.aRP = aRP;
        this.priorityLevel = priorityLevel;
        this.averWindow = averWindow;
        this.maxDataBurstVol = maxDataBurstVol;
    }

    /**
     * @summary Restructures an object into a AuthorizedQoSInformation
     * @description
     * 
     * This takes an `object` and converts it to a `AuthorizedQoSInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthorizedQoSInformation`.
     * @returns {AuthorizedQoSInformation}
     */
    public static _from_object (_o: { [_K in keyof (AuthorizedQoSInformation)]: (AuthorizedQoSInformation)[_K] }): AuthorizedQoSInformation {
        return new AuthorizedQoSInformation(_o.fiveQi, _o.aRP, _o.priorityLevel, _o.averWindow, _o.maxDataBurstVol);
    }


}

/**
 * @summary The Leading Root Component Types of AuthorizedQoSInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthorizedQoSInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("fiveQi", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aRP", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("priorityLevel", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("averWindow", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("maxDataBurstVol", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of AuthorizedQoSInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthorizedQoSInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthorizedQoSInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthorizedQoSInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthorizedQoSInformation: $.ASN1Decoder<AuthorizedQoSInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizedQoSInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthorizedQoSInformation (el: _Element): AuthorizedQoSInformation {
    if (!_cached_decoder_for_AuthorizedQoSInformation) { _cached_decoder_for_AuthorizedQoSInformation = function (el: _Element): AuthorizedQoSInformation {
    let fiveQi!: INTEGER;
    let aRP!: AllocationRetentionPriority;
    let priorityLevel: OPTIONAL<INTEGER>;
    let averWindow: OPTIONAL<INTEGER>;
    let maxDataBurstVol: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "fiveQi": (_el: _Element): void => { fiveQi = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "aRP": (_el: _Element): void => { aRP = $._decode_implicit<AllocationRetentionPriority>(() => _decode_AllocationRetentionPriority)(_el); },
        "priorityLevel": (_el: _Element): void => { priorityLevel = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "averWindow": (_el: _Element): void => { averWindow = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxDataBurstVol": (_el: _Element): void => { maxDataBurstVol = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AuthorizedQoSInformation,
        _extension_additions_list_spec_for_AuthorizedQoSInformation,
        _root_component_type_list_2_spec_for_AuthorizedQoSInformation,
        undefined,
    );
    return new AuthorizedQoSInformation(
        fiveQi,
        aRP,
        priorityLevel,
        averWindow,
        maxDataBurstVol
    );
}; }
    return _cached_decoder_for_AuthorizedQoSInformation(el);
}

let _cached_encoder_for_AuthorizedQoSInformation: $.ASN1Encoder<AuthorizedQoSInformation> | null = null;

/**
 * @summary Encodes a(n) AuthorizedQoSInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizedQoSInformation, encoded as an ASN.1 Element.
 */
export
function _encode_AuthorizedQoSInformation (value: AuthorizedQoSInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthorizedQoSInformation) { _cached_encoder_for_AuthorizedQoSInformation = function (value: AuthorizedQoSInformation, elGetter: $.ASN1Encoder<AuthorizedQoSInformation>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.fiveQi, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_AllocationRetentionPriority, $.BER)(value.aRP, $.BER));
    if (value.priorityLevel !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.priorityLevel, $.BER));
    }
    if (value.averWindow !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.averWindow, $.BER));
    }
    if (value.maxDataBurstVol !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.maxDataBurstVol, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AuthorizedQoSInformation(value, elGetter);
}


/* eslint-enable */
