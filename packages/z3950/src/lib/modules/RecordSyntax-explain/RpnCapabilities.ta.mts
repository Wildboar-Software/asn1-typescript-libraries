/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RpnCapabilities_operators_Item, _decode_RpnCapabilities_operators_Item, _encode_RpnCapabilities_operators_Item } from "../RecordSyntax-explain/RpnCapabilities-operators-Item.ta.mjs";
// export { RpnCapabilities_operators_Item, RpnCapabilities_operators_Item_and /* IMPORTED_LONG_NAMED_INTEGER */, and /* IMPORTED_SHORT_NAMED_INTEGER */, RpnCapabilities_operators_Item_or /* IMPORTED_LONG_NAMED_INTEGER */, or /* IMPORTED_SHORT_NAMED_INTEGER */, RpnCapabilities_operators_Item_and_not /* IMPORTED_LONG_NAMED_INTEGER */, and_not /* IMPORTED_SHORT_NAMED_INTEGER */, RpnCapabilities_operators_Item_prox /* IMPORTED_LONG_NAMED_INTEGER */, prox /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RpnCapabilities_operators_Item, _encode_RpnCapabilities_operators_Item } from "../RecordSyntax-explain/RpnCapabilities-operators-Item.ta.mjs";
import { ProximitySupport, _decode_ProximitySupport, _encode_ProximitySupport } from "../RecordSyntax-explain/ProximitySupport.ta.mjs";
// export { ProximitySupport, _decode_ProximitySupport, _encode_ProximitySupport } from "../RecordSyntax-explain/ProximitySupport.ta.mjs";


/**
 * @summary RpnCapabilities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RpnCapabilities ::= SEQUENCE {
 *     operators                   [0] IMPLICIT SEQUENCE OF INTEGER {
 *         and     (0),
 *         or      (1),
 *         and-not (2),
 *         prox    (3)
 *     } OPTIONAL,
 *     -- Omitted means all operators are supported
 *     resultSetAsOperandSupported [1] IMPLICIT BOOLEAN,
 *     restrictionOperandSupported [2] IMPLICIT BOOLEAN,
 *     proximity                   [3] IMPLICIT ProximitySupport OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RpnCapabilities {
    /**
     * @summary `operators`.
     * @public
     * @readonly
     */
    readonly operators: OPTIONAL<RpnCapabilities_operators_Item[]>;
    /**
     * @summary `resultSetAsOperandSupported`.
     * @public
     * @readonly
     */
    readonly resultSetAsOperandSupported: BOOLEAN;
    /**
     * @summary `restrictionOperandSupported`.
     * @public
     * @readonly
     */
    readonly restrictionOperandSupported: BOOLEAN;
    /**
     * @summary `proximity`.
     * @public
     * @readonly
     */
    readonly proximity: OPTIONAL<ProximitySupport>;

    constructor (
        operators: OPTIONAL<RpnCapabilities_operators_Item[]>,
        resultSetAsOperandSupported: BOOLEAN,
        restrictionOperandSupported: BOOLEAN,
        proximity: OPTIONAL<ProximitySupport>
    ) {
        this.operators = operators;
        this.resultSetAsOperandSupported = resultSetAsOperandSupported;
        this.restrictionOperandSupported = restrictionOperandSupported;
        this.proximity = proximity;
    }

    /**
     * @summary Restructures an object into a RpnCapabilities
     * @description
     * 
     * This takes an `object` and converts it to a `RpnCapabilities`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RpnCapabilities`.
     * @returns {RpnCapabilities}
     */
    public static _from_object (_o: { [_K in keyof (RpnCapabilities)]: (RpnCapabilities)[_K] }): RpnCapabilities {
        return new RpnCapabilities(_o.operators, _o.resultSetAsOperandSupported, _o.restrictionOperandSupported, _o.proximity);
    }


}

/**
 * @summary The Leading Root Component Types of RpnCapabilities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RpnCapabilities: $.ComponentSpec[] = [
    new $.ComponentSpec("operators", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("resultSetAsOperandSupported", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("restrictionOperandSupported", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("proximity", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of RpnCapabilities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RpnCapabilities: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RpnCapabilities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RpnCapabilities: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RpnCapabilities: $.ASN1Decoder<RpnCapabilities> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RpnCapabilities
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RpnCapabilities (el: _Element): RpnCapabilities {
    if (!_cached_decoder_for_RpnCapabilities) { _cached_decoder_for_RpnCapabilities = function (el: _Element): RpnCapabilities {
    let operators: OPTIONAL<RpnCapabilities_operators_Item[]>;
    let resultSetAsOperandSupported!: BOOLEAN;
    let restrictionOperandSupported!: BOOLEAN;
    let proximity: OPTIONAL<ProximitySupport>;
    const callbacks: $.DecodingMap = {
        "operators": (_el: _Element): void => { operators = $._decode_implicit<RpnCapabilities_operators_Item[]>(() => $._decodeSequenceOf<RpnCapabilities_operators_Item>(() => _decode_RpnCapabilities_operators_Item))(_el); },
        "resultSetAsOperandSupported": (_el: _Element): void => { resultSetAsOperandSupported = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "restrictionOperandSupported": (_el: _Element): void => { restrictionOperandSupported = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "proximity": (_el: _Element): void => { proximity = $._decode_implicit<ProximitySupport>(() => _decode_ProximitySupport)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RpnCapabilities,
        _extension_additions_list_spec_for_RpnCapabilities,
        _root_component_type_list_2_spec_for_RpnCapabilities,
        undefined,
    );
    return new RpnCapabilities(
        operators,
        resultSetAsOperandSupported,
        restrictionOperandSupported,
        proximity
    );
}; }
    return _cached_decoder_for_RpnCapabilities(el);
}

let _cached_encoder_for_RpnCapabilities: $.ASN1Encoder<RpnCapabilities> | null = null;

/**
 * @summary Encodes a(n) RpnCapabilities into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RpnCapabilities, encoded as an ASN.1 Element.
 */
export
function _encode_RpnCapabilities (value: RpnCapabilities, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RpnCapabilities) { _cached_encoder_for_RpnCapabilities = function (value: RpnCapabilities, elGetter: $.ASN1Encoder<RpnCapabilities>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.operators !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<RpnCapabilities_operators_Item>(() => _encode_RpnCapabilities_operators_Item, $.BER), $.BER)(value.operators, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.resultSetAsOperandSupported, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.restrictionOperandSupported, $.BER);
    if (value.proximity !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_ProximitySupport, $.BER)(value.proximity, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RpnCapabilities(value, elGetter);
}


/* eslint-enable */
