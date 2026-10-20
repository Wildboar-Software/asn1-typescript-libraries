/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MRMapping, _decode_MRMapping, _encode_MRMapping } from "../InformationFramework/MRMapping.ta.mjs";
// export { MRMapping, _decode_MRMapping, _encode_MRMapping } from "../InformationFramework/MRMapping.ta.mjs";


/**
 * @summary RelaxationPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RelaxationPolicy ::= SEQUENCE {
 *   basic        [0]  MRMapping DEFAULT {},
 *   tightenings  [1]  SEQUENCE SIZE (1..MAX) OF MRMapping OPTIONAL,
 *   relaxations  [2]  SEQUENCE SIZE (1..MAX) OF MRMapping OPTIONAL,
 *   maximum      [3]  INTEGER OPTIONAL, -- mandatory if tightenings is present
 *   minimum      [4]  INTEGER DEFAULT 1
 * }
 * ```
 * 
 * @class
 */
export
class RelaxationPolicy {
    /**
     * @summary `basic`.
     * @public
     * @readonly
     */
    readonly basic: OPTIONAL<MRMapping>;
    /**
     * @summary `tightenings`.
     * @public
     * @readonly
     */
    readonly tightenings: OPTIONAL<MRMapping[]>;
    /**
     * @summary `relaxations`.
     * @public
     * @readonly
     */
    readonly relaxations: OPTIONAL<MRMapping[]>;
    /**
     * @summary `maximum`.
     * @public
     * @readonly
     */
    readonly maximum: OPTIONAL<INTEGER>;
    /**
     * @summary `minimum`.
     * @public
     * @readonly
     */
    readonly minimum: OPTIONAL<INTEGER>;

    constructor (
        basic: OPTIONAL<MRMapping>,
        tightenings: OPTIONAL<MRMapping[]>,
        relaxations: OPTIONAL<MRMapping[]>,
        maximum: OPTIONAL<INTEGER>,
        minimum: OPTIONAL<INTEGER>
    ) {
        this.basic = basic;
        this.tightenings = tightenings;
        this.relaxations = relaxations;
        this.maximum = maximum;
        this.minimum = minimum;
    }

    /**
     * @summary Restructures an object into a RelaxationPolicy
     * @description
     * 
     * This takes an `object` and converts it to a `RelaxationPolicy`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RelaxationPolicy`.
     * @returns {RelaxationPolicy}
     */
    public static _from_object (_o: { [_K in keyof (RelaxationPolicy)]: (RelaxationPolicy)[_K] }): RelaxationPolicy {
        return new RelaxationPolicy(_o.basic, _o.tightenings, _o.relaxations, _o.maximum, _o.minimum);
    }

    /**
     * @summary Getter that returns the default value for `basic`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_basic () { return MRMapping._from_object({  }); }
    /**
     * @summary Getter that returns the default value for `minimum`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_minimum () { return 1; }
}

/**
 * @summary The Leading Root Component Types of RelaxationPolicy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RelaxationPolicy: $.ComponentSpec[] = [
    new $.ComponentSpec("basic", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tightenings", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("relaxations", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("maximum", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("minimum", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of RelaxationPolicy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RelaxationPolicy: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RelaxationPolicy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RelaxationPolicy: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RelaxationPolicy: $.ASN1Decoder<RelaxationPolicy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelaxationPolicy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RelaxationPolicy (el: _Element): RelaxationPolicy {
    if (!_cached_decoder_for_RelaxationPolicy) { _cached_decoder_for_RelaxationPolicy = function (el: _Element): RelaxationPolicy {
    let basic: OPTIONAL<MRMapping> = RelaxationPolicy._default_value_for_basic;
    let tightenings: OPTIONAL<MRMapping[]>;
    let relaxations: OPTIONAL<MRMapping[]>;
    let maximum: OPTIONAL<INTEGER>;
    let minimum: OPTIONAL<INTEGER> = RelaxationPolicy._default_value_for_minimum;
    const callbacks: $.DecodingMap = {
        "basic": (_el: _Element): void => { basic = $._decode_explicit<MRMapping>(() => _decode_MRMapping)(_el); },
        "tightenings": (_el: _Element): void => { tightenings = $._decode_explicit<MRMapping[]>(() => $._decodeSequenceOf<MRMapping>(() => _decode_MRMapping))(_el); },
        "relaxations": (_el: _Element): void => { relaxations = $._decode_explicit<MRMapping[]>(() => $._decodeSequenceOf<MRMapping>(() => _decode_MRMapping))(_el); },
        "maximum": (_el: _Element): void => { maximum = $._decode_explicit<INTEGER>(() => $._decodeInteger)(_el); },
        "minimum": (_el: _Element): void => { minimum = $._decode_explicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RelaxationPolicy,
        _extension_additions_list_spec_for_RelaxationPolicy,
        _root_component_type_list_2_spec_for_RelaxationPolicy,
        undefined,
    );
    return new RelaxationPolicy(
        basic,
        tightenings,
        relaxations,
        maximum,
        minimum
    );
}; }
    return _cached_decoder_for_RelaxationPolicy(el);
}

let _cached_encoder_for_RelaxationPolicy: $.ASN1Encoder<RelaxationPolicy> | null = null;

/**
 * @summary Encodes a(n) RelaxationPolicy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelaxationPolicy, encoded as an ASN.1 Element.
 */
export
function _encode_RelaxationPolicy (value: RelaxationPolicy, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RelaxationPolicy) { _cached_encoder_for_RelaxationPolicy = function (value: RelaxationPolicy, elGetter: $.ASN1Encoder<RelaxationPolicy>): _Element {
    const _components: _Element[] = [];
    if (value.basic !== undefined && !$.deepEq(value.basic, RelaxationPolicy._default_value_for_basic)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 0, () => _encode_MRMapping, $.BER)(value.basic, $.BER));
    }
    if (value.tightenings !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => $._encodeSequenceOf<MRMapping>(() => _encode_MRMapping, $.BER), $.BER)(value.tightenings, $.BER));
    }
    if (value.relaxations !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => $._encodeSequenceOf<MRMapping>(() => _encode_MRMapping, $.BER), $.BER)(value.relaxations, $.BER));
    }
    if (value.maximum !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.maximum, $.BER));
    }
    if (value.minimum !== undefined && !$.deepEq(value.minimum, RelaxationPolicy._default_value_for_minimum)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.minimum, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RelaxationPolicy(value, elGetter);
}


/* eslint-enable */
