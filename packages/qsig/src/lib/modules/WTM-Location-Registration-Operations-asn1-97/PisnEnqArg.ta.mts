/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlternativeId, _decode_AlternativeId, _encode_AlternativeId } from "../WTM-Location-Registration-Operations-asn1-97/AlternativeId.ta.mjs";
import { LrExtension, _decode_LrExtension, _encode_LrExtension } from "../WTM-Location-Registration-Operations-asn1-97/LrExtension.ta.mjs";

/**
 * @summary PisnEnqArg
 * @description
 *
 * Argument of `pisnEnquiry` (ECMA-302 §6.3.1, §6.5.2.1). ECMA-282 §6.8.1 puts
 * the identifier supplied by the PUM user in `alternativeId`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PisnEnqArg ::= SEQUENCE {
 *     alternativeId AlternativeId,
 *     -- Can be a temporary identifier, e.g. Network Assigned
 *     -- Identity structure, or a fixed handset identifier.
 *     argExtension LrExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PisnEnqArg {
    /**
     * @summary `alternativeId`.
     * @description
     *
     * Identifier to translate (§6.5.2.1, §6.5.3.1). It can be a temporary
     * identifier, for example a Network Assigned Identity, or a fixed handset
     * identifier (§6.3.1).
     *
     * @public
     * @readonly
     */
    readonly alternativeId: AlternativeId;
    /**
     * @summary `argExtension`.
     * @description
     *
     * Manufacturer-specific data. `WTMLRExtSet` assigns no extensions (ECMA-302
     * §6.3.1).
     *
     * @public
     * @readonly
     */
    readonly argExtension: OPTIONAL<LrExtension>;

    constructor (
        alternativeId: AlternativeId,
        argExtension?: OPTIONAL<LrExtension>
    ) {
        this.alternativeId = alternativeId;
        this.argExtension = argExtension;
    }

    /**
     * @summary Restructures an object into a PisnEnqArg
     * @description
     * 
     * This takes an `object` and converts it to a `PisnEnqArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PisnEnqArg`.
     * @returns {PisnEnqArg}
     */
    public static _from_object (_o: { [_K in keyof (PisnEnqArg)]: (PisnEnqArg)[_K] }): PisnEnqArg {
        return new PisnEnqArg(_o.alternativeId, _o.argExtension);
    }

}

/**
 * @summary The Leading Root Component Types of PisnEnqArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PisnEnqArg: $.ComponentSpec[] = [
    new $.ComponentSpec("alternativeId", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("argExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of PisnEnqArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PisnEnqArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PisnEnqArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PisnEnqArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PisnEnqArg: $.ASN1Decoder<PisnEnqArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PisnEnqArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PisnEnqArg (el: _Element): PisnEnqArg {
    if (!_cached_decoder_for_PisnEnqArg) { _cached_decoder_for_PisnEnqArg = function (el: _Element): PisnEnqArg {
    let alternativeId!: AlternativeId;
    let argExtension: OPTIONAL<LrExtension>;
    const callbacks: $.DecodingMap = {
        "alternativeId": (_el: _Element): void => { alternativeId = _decode_AlternativeId(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_LrExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PisnEnqArg,
        _extension_additions_list_spec_for_PisnEnqArg,
        _root_component_type_list_2_spec_for_PisnEnqArg,
        undefined,
    );
    return new PisnEnqArg(
        alternativeId,
        argExtension
    );
}; }
    return _cached_decoder_for_PisnEnqArg(el);
}

let _cached_encoder_for_PisnEnqArg: $.ASN1Encoder<PisnEnqArg> | null = null;

/**
 * @summary Encodes a(n) PisnEnqArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PisnEnqArg, encoded as an ASN.1 Element.
 */
export
function _encode_PisnEnqArg (value: PisnEnqArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PisnEnqArg) { _cached_encoder_for_PisnEnqArg = function (value: PisnEnqArg, _elGetter: $.ASN1Encoder<PisnEnqArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_AlternativeId(value.alternativeId, $.BER));
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_LrExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PisnEnqArg(value, elGetter);
}

/* eslint-enable */
