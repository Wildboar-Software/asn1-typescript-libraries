/* eslint-disable */
import {
    type BOOLEAN,
    type INTEGER,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Event, _decode_Event, _encode_Event } from "../IN-SCF-SCF-datatypes/Event.ta.mjs";
// export { Event, _decode_Event, _encode_Event } from "../IN-SCF-SCF-datatypes/Event.ta.mjs";
import { Rule, _decode_Rule, _encode_Rule } from "../IN-SCF-SCF-datatypes/Rule.ta.mjs";
// export { Rule, _decode_Rule, _encode_Rule } from "../IN-SCF-SCF-datatypes/Rule.ta.mjs";


/**
 * @summary Tariff
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Tariff ::= SEQUENCE {
 *   condition      [1]  Event,
 *   meternum       [2]  INTEGER(0..nbrOfMeters) OPTIONAL,
 *   rule           [3]  Rule OPTIONAL,
 *   resetAfterRCI  [4]  BOOLEAN DEFAULT FALSE
 * }
 * ```
 * 
 * @class
 */
export
class Tariff {
    /**
     * @summary `condition`.
     * @public
     * @readonly
     */
    readonly condition: Event;
    /**
     * @summary `meternum`.
     * @public
     * @readonly
     */
    readonly meternum: OPTIONAL<INTEGER>;
    /**
     * @summary `rule`.
     * @public
     * @readonly
     */
    readonly rule: OPTIONAL<Rule>;
    /**
     * @summary `resetAfterRCI`.
     * @public
     * @readonly
     */
    readonly resetAfterRCI: OPTIONAL<BOOLEAN>;

    constructor (
        condition: Event,
        meternum?: OPTIONAL<INTEGER>,
        rule?: OPTIONAL<Rule>,
        resetAfterRCI?: OPTIONAL<BOOLEAN>
    ) {
        this.condition = condition;
        this.meternum = meternum;
        this.rule = rule;
        this.resetAfterRCI = resetAfterRCI;
    }

    /**
     * @summary Restructures an object into a Tariff
     * @description
     * 
     * This takes an `object` and converts it to a `Tariff`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Tariff`.
     * @returns {Tariff}
     */
    public static _from_object (_o: { [_K in keyof (Tariff)]: (Tariff)[_K] }): Tariff {
        return new Tariff(_o.condition, _o.meternum, _o.rule, _o.resetAfterRCI);
    }

    /**
     * @summary Getter that returns the default value for `resetAfterRCI`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_resetAfterRCI () { return false; }
}

/**
 * @summary The Leading Root Component Types of Tariff
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Tariff: $.ComponentSpec[] = [
    new $.ComponentSpec("condition", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("meternum", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rule", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("resetAfterRCI", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of Tariff
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Tariff: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Tariff
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Tariff: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Tariff: $.ASN1Decoder<Tariff> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Tariff
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Tariff (el: _Element): Tariff {
    if (!_cached_decoder_for_Tariff) { _cached_decoder_for_Tariff = function (el: _Element): Tariff {
    let condition!: Event;
    let meternum: OPTIONAL<INTEGER>;
    let rule: OPTIONAL<Rule>;
    let resetAfterRCI: OPTIONAL<BOOLEAN> = Tariff._default_value_for_resetAfterRCI;
    const callbacks: $.DecodingMap = {
        "condition": (_el: _Element): void => { condition = $._decode_explicit<Event>(() => _decode_Event)(_el); },
        "meternum": (_el: _Element): void => { meternum = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "rule": (_el: _Element): void => { rule = $._decode_implicit<Rule>(() => _decode_Rule)(_el); },
        "resetAfterRCI": (_el: _Element): void => { resetAfterRCI = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Tariff,
        _extension_additions_list_spec_for_Tariff,
        _root_component_type_list_2_spec_for_Tariff,
        undefined,
    );
    return new Tariff(
        condition,
        meternum,
        rule,
        resetAfterRCI
    );
}; }
    return _cached_decoder_for_Tariff(el);
}

let _cached_encoder_for_Tariff: $.ASN1Encoder<Tariff> | null = null;

/**
 * @summary Encodes a(n) Tariff into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Tariff, encoded as an ASN.1 Element.
 */
export
function _encode_Tariff (value: Tariff, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Tariff) { _cached_encoder_for_Tariff = function (value: Tariff, elGetter: $.ASN1Encoder<Tariff>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_Event, $.BER)(value.condition, $.BER));
    if (value.meternum !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.meternum, $.BER));
    }
    if (value.rule !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Rule, $.BER)(value.rule, $.BER));
    }
    if (value.resetAfterRCI !== undefined && !$.deepEq(value.resetAfterRCI, Tariff._default_value_for_resetAfterRCI)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.resetAfterRCI, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Tariff(value, elGetter);
}


/* eslint-enable */
