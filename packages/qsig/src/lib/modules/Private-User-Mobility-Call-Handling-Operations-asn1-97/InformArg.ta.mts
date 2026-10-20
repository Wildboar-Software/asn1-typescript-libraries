/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PumIdentity, _decode_PumIdentity, _encode_PumIdentity } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/PumIdentity.ta.mjs";
// export { PumIdentity, _decode_PumIdentity, _encode_PumIdentity } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/PumIdentity.ta.mjs";
import { PumiExtension, _decode_PumiExtension, _encode_PumiExtension } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/PumiExtension.ta.mjs";
// export { PumiExtension, _decode_PumiExtension, _encode_PumiExtension } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/PumiExtension.ta.mjs";


/**
 * @summary InformArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InformArg ::= SEQUENCE {
 *     pumIdentity PumIdentity,
 *     -- The PISN number (always a Complete Number)
 *     -- and/or an alternative identifier of the PUM user.
 *     argExtension PumiExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class InformArg {
    /**
     * @summary `pumIdentity`.
     * @public
     * @readonly
     */
    readonly pumIdentity: PumIdentity;
    /**
     * @summary `argExtension`.
     * @public
     * @readonly
     */
    readonly argExtension: OPTIONAL<PumiExtension>;

    constructor (
        pumIdentity: PumIdentity,
        argExtension: OPTIONAL<PumiExtension>
    ) {
        this.pumIdentity = pumIdentity;
        this.argExtension = argExtension;
    }

    /**
     * @summary Restructures an object into a InformArg
     * @description
     * 
     * This takes an `object` and converts it to a `InformArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InformArg`.
     * @returns {InformArg}
     */
    public static _from_object (_o: { [_K in keyof (InformArg)]: (InformArg)[_K] }): InformArg {
        return new InformArg(_o.pumIdentity, _o.argExtension);
    }


}

/**
 * @summary The Leading Root Component Types of InformArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InformArg: $.ComponentSpec[] = [
    new $.ComponentSpec("pumIdentity", false, $.hasAnyTag),
    new $.ComponentSpec("argExtension", true, $.or($.hasTag(_TagClass.context, 4), $.hasTag(_TagClass.context, 5)))
];

/**
 * @summary The Trailing Root Component Types of InformArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InformArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InformArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InformArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InformArg: $.ASN1Decoder<InformArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InformArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InformArg (el: _Element): InformArg {
    if (!_cached_decoder_for_InformArg) { _cached_decoder_for_InformArg = function (el: _Element): InformArg {
    let pumIdentity!: PumIdentity;
    let argExtension: OPTIONAL<PumiExtension>;
    const callbacks: $.DecodingMap = {
        "pumIdentity": (_el: _Element): void => { pumIdentity = _decode_PumIdentity(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_PumiExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InformArg,
        _extension_additions_list_spec_for_InformArg,
        _root_component_type_list_2_spec_for_InformArg,
        undefined,
    );
    return new InformArg(
        pumIdentity,
        argExtension
    );
}; }
    return _cached_decoder_for_InformArg(el);
}

let _cached_encoder_for_InformArg: $.ASN1Encoder<InformArg> | null = null;

/**
 * @summary Encodes a(n) InformArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformArg, encoded as an ASN.1 Element.
 */
export
function _encode_InformArg (value: InformArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InformArg) { _cached_encoder_for_InformArg = function (value: InformArg, elGetter: $.ASN1Encoder<InformArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PumIdentity(value.pumIdentity, $.BER));
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_PumiExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_InformArg(value, elGetter);
}


/* eslint-enable */
