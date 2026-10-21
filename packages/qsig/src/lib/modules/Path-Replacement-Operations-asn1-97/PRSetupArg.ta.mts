/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallIdentity, _decode_CallIdentity, _encode_CallIdentity } from "../Path-Replacement-Operations-asn1-97/CallIdentity.ta.mjs";
import { PRSetupArg_extension, _decode_PRSetupArg_extension, _encode_PRSetupArg_extension } from "../Path-Replacement-Operations-asn1-97/PRSetupArg-extension.ta.mjs";

/**
 * @summary PRSetupArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PRSetupArg ::= SEQUENCE {
 *     callIdentity CallIdentity,
 *     extension CHOICE {
 *         single [1] IMPLICIT Extension {{PRExtSet}},
 *         multiple [2] IMPLICIT SEQUENCE OF Extension {{PRExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PRSetupArg {
    /**
     * @summary `callIdentity`.
     * @public
     * @readonly
     */
    readonly callIdentity: CallIdentity;
    /**
     * @summary `extension`.
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<PRSetupArg_extension>;

    constructor (
        callIdentity: CallIdentity,
        extension: OPTIONAL<PRSetupArg_extension>
    ) {
        this.callIdentity = callIdentity;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a PRSetupArg
     * @description
     * 
     * This takes an `object` and converts it to a `PRSetupArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PRSetupArg`.
     * @returns {PRSetupArg}
     */
    public static _from_object (_o: { [_K in keyof (PRSetupArg)]: (PRSetupArg)[_K] }): PRSetupArg {
        return new PRSetupArg(_o.callIdentity, _o.extension);
    }

}

/**
 * @summary The Leading Root Component Types of PRSetupArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PRSetupArg: $.ComponentSpec[] = [
    new $.ComponentSpec("callIdentity", false, $.hasTag(_TagClass.universal, 18)),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of PRSetupArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PRSetupArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PRSetupArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PRSetupArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PRSetupArg: $.ASN1Decoder<PRSetupArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PRSetupArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PRSetupArg (el: _Element): PRSetupArg {
    if (!_cached_decoder_for_PRSetupArg) { _cached_decoder_for_PRSetupArg = function (el: _Element): PRSetupArg {
    let callIdentity!: CallIdentity;
    let extension: OPTIONAL<PRSetupArg_extension>;
    const callbacks: $.DecodingMap = {
        "callIdentity": (_el: _Element): void => { callIdentity = _decode_CallIdentity(_el); },
        "extension": (_el: _Element): void => { extension = _decode_PRSetupArg_extension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PRSetupArg,
        _extension_additions_list_spec_for_PRSetupArg,
        _root_component_type_list_2_spec_for_PRSetupArg,
        undefined,
    );
    return new PRSetupArg(
        callIdentity,
        extension
    );
}; }
    return _cached_decoder_for_PRSetupArg(el);
}

let _cached_encoder_for_PRSetupArg: $.ASN1Encoder<PRSetupArg> | null = null;

/**
 * @summary Encodes a(n) PRSetupArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PRSetupArg, encoded as an ASN.1 Element.
 */
export
function _encode_PRSetupArg (value: PRSetupArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PRSetupArg) { _cached_encoder_for_PRSetupArg = function (value: PRSetupArg, _elGetter: $.ASN1Encoder<PRSetupArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_CallIdentity(value.callIdentity, $.BER));
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_PRSetupArg_extension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PRSetupArg(value, elGetter);
}

/* eslint-enable */
