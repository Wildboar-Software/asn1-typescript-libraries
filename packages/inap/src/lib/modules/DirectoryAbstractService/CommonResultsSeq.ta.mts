/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";


/**
 * @summary CommonResultsSeq
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonResultsSeq ::= SEQUENCE {
 *   securityParameters  [30]  SecurityParameters OPTIONAL,
 *   performer           [29]  DistinguishedName OPTIONAL,
 *   aliasDereferenced   [28]  BOOLEAN DEFAULT FALSE
 * }
 * ```
 * 
 * @class
 */
export
class CommonResultsSeq {
    /**
     * @summary `securityParameters`.
     * @public
     * @readonly
     */
    readonly securityParameters: OPTIONAL<SecurityParameters>;
    /**
     * @summary `performer`.
     * @public
     * @readonly
     */
    readonly performer: OPTIONAL<DistinguishedName>;
    /**
     * @summary `aliasDereferenced`.
     * @public
     * @readonly
     */
    readonly aliasDereferenced: OPTIONAL<BOOLEAN>;

    constructor (
        securityParameters: OPTIONAL<SecurityParameters>,
        performer: OPTIONAL<DistinguishedName>,
        aliasDereferenced: OPTIONAL<BOOLEAN>
    ) {
        this.securityParameters = securityParameters;
        this.performer = performer;
        this.aliasDereferenced = aliasDereferenced;
    }

    /**
     * @summary Restructures an object into a CommonResultsSeq
     * @description
     * 
     * This takes an `object` and converts it to a `CommonResultsSeq`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonResultsSeq`.
     * @returns {CommonResultsSeq}
     */
    public static _from_object (_o: { [_K in keyof (CommonResultsSeq)]: (CommonResultsSeq)[_K] }): CommonResultsSeq {
        return new CommonResultsSeq(_o.securityParameters, _o.performer, _o.aliasDereferenced);
    }

    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced () { return false; }
}

/**
 * @summary The Leading Root Component Types of CommonResultsSeq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommonResultsSeq: $.ComponentSpec[] = [
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("performer", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("aliasDereferenced", true, $.hasTag(_TagClass.context, 28))
];

/**
 * @summary The Trailing Root Component Types of CommonResultsSeq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommonResultsSeq: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommonResultsSeq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommonResultsSeq: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommonResultsSeq: $.ASN1Decoder<CommonResultsSeq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonResultsSeq
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonResultsSeq (el: _Element): CommonResultsSeq {
    if (!_cached_decoder_for_CommonResultsSeq) { _cached_decoder_for_CommonResultsSeq = function (el: _Element): CommonResultsSeq {
    let securityParameters: OPTIONAL<SecurityParameters>;
    let performer: OPTIONAL<DistinguishedName>;
    let aliasDereferenced: OPTIONAL<BOOLEAN> = CommonResultsSeq._default_value_for_aliasDereferenced;
    const callbacks: $.DecodingMap = {
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_explicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "performer": (_el: _Element): void => { performer = $._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); },
        "aliasDereferenced": (_el: _Element): void => { aliasDereferenced = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonResultsSeq,
        _extension_additions_list_spec_for_CommonResultsSeq,
        _root_component_type_list_2_spec_for_CommonResultsSeq,
        undefined,
    );
    return new CommonResultsSeq(
        securityParameters,
        performer,
        aliasDereferenced
    );
}; }
    return _cached_decoder_for_CommonResultsSeq(el);
}

let _cached_encoder_for_CommonResultsSeq: $.ASN1Encoder<CommonResultsSeq> | null = null;

/**
 * @summary Encodes a(n) CommonResultsSeq into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonResultsSeq, encoded as an ASN.1 Element.
 */
export
function _encode_CommonResultsSeq (value: CommonResultsSeq, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonResultsSeq) { _cached_encoder_for_CommonResultsSeq = function (value: CommonResultsSeq, elGetter: $.ASN1Encoder<CommonResultsSeq>): _Element {
    const _components: _Element[] = [];
    if (value.securityParameters !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 30, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER));
    }
    if (value.performer !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 29, () => _encode_DistinguishedName, $.BER)(value.performer, $.BER));
    }
    if (value.aliasDereferenced !== undefined && !$.deepEq(value.aliasDereferenced, CommonResultsSeq._default_value_for_aliasDereferenced)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 28, () => $._encodeBoolean, $.BER)(value.aliasDereferenced, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CommonResultsSeq(value, elGetter);
}


/* eslint-enable */
