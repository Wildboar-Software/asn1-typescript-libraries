/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallIdentity, _decode_CallIdentity, _encode_CallIdentity } from "../Path-Replacement-Operations-asn1-97/CallIdentity.ta.mjs";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { PRProposeArg_extension, _decode_PRProposeArg_extension, _encode_PRProposeArg_extension } from "../Path-Replacement-Operations-asn1-97/PRProposeArg-extension.ta.mjs";

/**
 * @summary PRProposeArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PRProposeArg ::= SEQUENCE {
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
class PRProposeArg {
    /**
     * @summary `callIdentity`.
     * @public
     * @readonly
     */
    readonly callIdentity: CallIdentity;
    /**
     * @summary `rerouteingNumber`.
     * @public
     * @readonly
     */
    readonly rerouteingNumber: PartyNumber;
    /**
     * @summary `extension`.
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<PRProposeArg_extension>;

    constructor (
        callIdentity: CallIdentity,
        rerouteingNumber: PartyNumber,
        extension: OPTIONAL<PRProposeArg_extension>
    ) {
        this.callIdentity = callIdentity;
        this.rerouteingNumber = rerouteingNumber;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a PRProposeArg
     * @description
     * 
     * This takes an `object` and converts it to a `PRProposeArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PRProposeArg`.
     * @returns {PRProposeArg}
     */
    public static _from_object (_o: { [_K in keyof (PRProposeArg)]: (PRProposeArg)[_K] }): PRProposeArg {
        return new PRProposeArg(_o.callIdentity, _o.rerouteingNumber, _o.extension);
    }

}

/**
 * @summary The Leading Root Component Types of PRProposeArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PRProposeArg: $.ComponentSpec[] = [
    new $.ComponentSpec("callIdentity", false, $.hasTag(_TagClass.universal, 18)),
    new $.ComponentSpec("rerouteingNumber", false, $.hasAnyTag),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of PRProposeArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PRProposeArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PRProposeArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PRProposeArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PRProposeArg: $.ASN1Decoder<PRProposeArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PRProposeArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PRProposeArg (el: _Element): PRProposeArg {
    if (!_cached_decoder_for_PRProposeArg) { _cached_decoder_for_PRProposeArg = function (el: _Element): PRProposeArg {
    let callIdentity!: CallIdentity;
    let rerouteingNumber!: PartyNumber;
    let extension: OPTIONAL<PRProposeArg_extension>;
    const callbacks: $.DecodingMap = {
        "callIdentity": (_el: _Element): void => { callIdentity = _decode_CallIdentity(_el); },
        "rerouteingNumber": (_el: _Element): void => { rerouteingNumber = _decode_PartyNumber(_el); },
        "extension": (_el: _Element): void => { extension = _decode_PRProposeArg_extension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PRProposeArg,
        _extension_additions_list_spec_for_PRProposeArg,
        _root_component_type_list_2_spec_for_PRProposeArg,
        undefined,
    );
    return new PRProposeArg(
        callIdentity,
        rerouteingNumber,
        extension
    );
}; }
    return _cached_decoder_for_PRProposeArg(el);
}

let _cached_encoder_for_PRProposeArg: $.ASN1Encoder<PRProposeArg> | null = null;

/**
 * @summary Encodes a(n) PRProposeArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PRProposeArg, encoded as an ASN.1 Element.
 */
export
function _encode_PRProposeArg (value: PRProposeArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PRProposeArg) { _cached_encoder_for_PRProposeArg = function (value: PRProposeArg, _elGetter: $.ASN1Encoder<PRProposeArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_CallIdentity(value.callIdentity, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.rerouteingNumber, $.BER));
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_PRProposeArg_extension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PRProposeArg(value, elGetter);
}

/* eslint-enable */
