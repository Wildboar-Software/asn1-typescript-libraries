/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallIdentity, _decode_CallIdentity, _encode_CallIdentity } from "../Path-Replacement-Operations-asn1-97/CallIdentity.ta.mjs";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { PRRetainArg_extension, _decode_PRRetainArg_extension, _encode_PRRetainArg_extension } from "../Path-Replacement-Operations-asn1-97/PRRetainArg-extension.ta.mjs";

/**
 * @summary PRRetainArg
 * @description
 *
 * Argument of `pathReplaceRetain`. The next PINX needs the same
 * identity and number the Requesting PINX sent, either to retain
 * further or to branch a new connection. ECMA-176 §6.6.2.1, §6.6.3.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-176/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PRRetainArg ::= SEQUENCE {
 *     callIdentity CallIdentity,
 *     rerouteingNumber PartyNumber,
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
class PRRetainArg {
    /**
     * @summary `callIdentity`.
     * @description
     *
     * Copied from `pathReplacePropose`, or from the `pathReplaceRetain`
     * this PINX received. ECMA-176 §6.6.2.1, §6.6.3.1.1.
     * @public
     * @readonly
     */
    readonly callIdentity: CallIdentity;
    /**
     * @summary `rerouteingNumber`.
     * @description
     *
     * Copied from `pathReplacePropose`, or from the retain this PINX
     * received. A PINX that cannot retain further uses it as Called
     * party number of the new SETUP. ECMA-176 §6.6.2.1, §6.6.3.2.1.
     * @public
     * @readonly
     */
    readonly rerouteingNumber: PartyNumber;
    /**
     * @summary `extension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-176 §6.3.1 defines no
     * member of `PRExtSet`.
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<PRRetainArg_extension>;

    constructor (
        callIdentity: CallIdentity,
        rerouteingNumber: PartyNumber,
        extension?: OPTIONAL<PRRetainArg_extension>
    ) {
        this.callIdentity = callIdentity;
        this.rerouteingNumber = rerouteingNumber;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a PRRetainArg
     * @description
     * 
     * This takes an `object` and converts it to a `PRRetainArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PRRetainArg`.
     * @returns {PRRetainArg}
     */
    public static _from_object (_o: { [_K in keyof (PRRetainArg)]: (PRRetainArg)[_K] }): PRRetainArg {
        return new PRRetainArg(_o.callIdentity, _o.rerouteingNumber, _o.extension);
    }

}

/**
 * @summary The Leading Root Component Types of PRRetainArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PRRetainArg: $.ComponentSpec[] = [
    new $.ComponentSpec("callIdentity", false, $.hasTag(_TagClass.universal, 18)),
    new $.ComponentSpec("rerouteingNumber", false, $.hasAnyTag),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of PRRetainArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PRRetainArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PRRetainArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PRRetainArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PRRetainArg: $.ASN1Decoder<PRRetainArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PRRetainArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PRRetainArg (el: _Element): PRRetainArg {
    if (!_cached_decoder_for_PRRetainArg) { _cached_decoder_for_PRRetainArg = function (el: _Element): PRRetainArg {
    let callIdentity!: CallIdentity;
    let rerouteingNumber!: PartyNumber;
    let extension: OPTIONAL<PRRetainArg_extension>;
    const callbacks: $.DecodingMap = {
        "callIdentity": (_el: _Element): void => { callIdentity = _decode_CallIdentity(_el); },
        "rerouteingNumber": (_el: _Element): void => { rerouteingNumber = _decode_PartyNumber(_el); },
        "extension": (_el: _Element): void => { extension = _decode_PRRetainArg_extension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PRRetainArg,
        _extension_additions_list_spec_for_PRRetainArg,
        _root_component_type_list_2_spec_for_PRRetainArg,
        undefined,
    );
    return new PRRetainArg(
        callIdentity,
        rerouteingNumber,
        extension
    );
}; }
    return _cached_decoder_for_PRRetainArg(el);
}

let _cached_encoder_for_PRRetainArg: $.ASN1Encoder<PRRetainArg> | null = null;

/**
 * @summary Encodes a(n) PRRetainArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PRRetainArg, encoded as an ASN.1 Element.
 */
export
function _encode_PRRetainArg (value: PRRetainArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PRRetainArg) { _cached_encoder_for_PRRetainArg = function (value: PRRetainArg, _elGetter: $.ASN1Encoder<PRRetainArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_CallIdentity(value.callIdentity, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.rerouteingNumber, $.BER));
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_PRRetainArg_extension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PRRetainArg(value, elGetter);
}

/* eslint-enable */
