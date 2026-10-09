/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntUnit, _decode_IntUnit, _encode_IntUnit } from "../Z39-50-APDU-2001/IntUnit.ta.mjs";
// export { IntUnit, _decode_IntUnit, _encode_IntUnit } from "../Z39-50-APDU-2001/IntUnit.ta.mjs";
import { Unit, _decode_Unit, _encode_Unit } from "../Z39-50-APDU-2001/Unit.ta.mjs";
// export { Unit, _decode_Unit, _encode_Unit } from "../Z39-50-APDU-2001/Unit.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary Charge
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Charge ::= SEQUENCE {
 *     cost    [1] IMPLICIT IntUnit,
 *     perWhat [2] IMPLICIT Unit OPTIONAL,
 *     -- e.g. "second," "minute," "line," "record"...
 *     text    [3] IMPLICIT HumanString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Charge {
    /**
     * @summary `cost`.
     * @public
     * @readonly
     */
    readonly cost: IntUnit;
    /**
     * @summary `perWhat`.
     * @public
     * @readonly
     */
    readonly perWhat: OPTIONAL<Unit>;
    /**
     * @summary `text`.
     * @public
     * @readonly
     */
    readonly text: OPTIONAL<HumanString>;

    constructor (
        cost: IntUnit,
        perWhat: OPTIONAL<Unit>,
        text: OPTIONAL<HumanString>
    ) {
        this.cost = cost;
        this.perWhat = perWhat;
        this.text = text;
    }

    /**
     * @summary Restructures an object into a Charge
     * @description
     * 
     * This takes an `object` and converts it to a `Charge`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Charge`.
     * @returns {Charge}
     */
    public static _from_object (_o: { [_K in keyof (Charge)]: (Charge)[_K] }): Charge {
        return new Charge(_o.cost, _o.perWhat, _o.text);
    }


}

/**
 * @summary The Leading Root Component Types of Charge
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Charge: $.ComponentSpec[] = [
    new $.ComponentSpec("cost", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("perWhat", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("text", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of Charge
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Charge: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Charge
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Charge: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Charge: $.ASN1Decoder<Charge> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Charge
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Charge (el: _Element): Charge {
    if (!_cached_decoder_for_Charge) { _cached_decoder_for_Charge = function (el: _Element): Charge {
    let cost!: IntUnit;
    let perWhat: OPTIONAL<Unit>;
    let text: OPTIONAL<HumanString>;
    const callbacks: $.DecodingMap = {
        "cost": (_el: _Element): void => { cost = $._decode_implicit<IntUnit>(() => _decode_IntUnit)(_el); },
        "perWhat": (_el: _Element): void => { perWhat = $._decode_implicit<Unit>(() => _decode_Unit)(_el); },
        "text": (_el: _Element): void => { text = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Charge,
        _extension_additions_list_spec_for_Charge,
        _root_component_type_list_2_spec_for_Charge,
        undefined,
    );
    return new Charge(
        cost,
        perWhat,
        text
    );
}; }
    return _cached_decoder_for_Charge(el);
}

let _cached_encoder_for_Charge: $.ASN1Encoder<Charge> | null = null;

/**
 * @summary Encodes a(n) Charge into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Charge, encoded as an ASN.1 Element.
 */
export
function _encode_Charge (value: Charge, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Charge) { _cached_encoder_for_Charge = function (value: Charge, elGetter: $.ASN1Encoder<Charge>): _Element {
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IntUnit, $.BER)(value.cost, $.BER);
    if (value.perWhat !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Unit, $.BER)(value.perWhat, $.BER);
    }
    if (value.text !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_HumanString, $.BER)(value.text, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Charge(value, elGetter);
}


/* eslint-enable */
