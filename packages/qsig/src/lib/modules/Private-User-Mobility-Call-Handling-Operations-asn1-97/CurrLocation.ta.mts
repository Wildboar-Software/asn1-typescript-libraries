/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { type PumIdentity, _decode_PumIdentity, _encode_PumIdentity } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/PumIdentity.ta.mjs";
import { type PumiExtension, _decode_PumiExtension, _encode_PumiExtension } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/PumiExtension.ta.mjs";

/**
 * @summary CurrLocation
 * @description
 *
 * Current location of the called PUM user (ECMA-284 §6.5.3.1). The PUMI-detect
 * PINX copies `hostingAddr` and `pumIdentity` into `pumiDivert` (§6.5.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-284/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrLocation ::= SEQUENCE {
 *     hostingAddr PartyNumber,
 *     -- The PISN number of the hosting user,
 *     -- always a Complete Number.
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
class CurrLocation {
    /**
     * @summary `hostingAddr`.
     * @description
     *
     * PISN number of the hosting user; always a complete number (§6.3.1). It
     * becomes the Called party number of the SETUP the Rerouteing PINX sends to
     * the Visitor PINX (§6.5.1.1).
     *
     * @public
     * @readonly
     */
    readonly hostingAddr: PartyNumber;
    /**
     * @summary `pumIdentity`.
     * @description
     *
     * PISN number, alternative identifier, or both. A PISN number here is
     * complete even when `pisnNumber` in the enquiry was not (§6.5.3.1).
     *
     * @public
     * @readonly
     */
    readonly pumIdentity: PumIdentity;
    /**
     * @summary `argExtension`.
     * @description
     *
     * Manufacturer-specific data. `PUMCHExtSet` assigns no extensions (ECMA-284
     * §6.3.1).
     *
     * @public
     * @readonly
     */
    readonly argExtension: OPTIONAL<PumiExtension>;

    constructor (
        hostingAddr: PartyNumber,
        pumIdentity: PumIdentity,
        argExtension?: OPTIONAL<PumiExtension>
    ) {
        this.hostingAddr = hostingAddr;
        this.pumIdentity = pumIdentity;
        this.argExtension = argExtension;
    }

    /**
     * @summary Restructures an object into a CurrLocation
     * @description
     * 
     * This takes an `object` and converts it to a `CurrLocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CurrLocation`.
     * @returns {CurrLocation}
     */
    public static _from_object (_o: { [_K in keyof (CurrLocation)]: (CurrLocation)[_K] }): CurrLocation {
        return new CurrLocation(_o.hostingAddr, _o.pumIdentity, _o.argExtension);
    }

}

/**
 * @summary The Leading Root Component Types of CurrLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CurrLocation: $.ComponentSpec[] = [
    new $.ComponentSpec("hostingAddr", false, $.hasAnyTag),
    new $.ComponentSpec("pumIdentity", false, $.hasAnyTag),
    new $.ComponentSpec("argExtension", true, $.or($.hasTag(_TagClass.context, 4), $.hasTag(_TagClass.context, 5)))
];

/**
 * @summary The Trailing Root Component Types of CurrLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CurrLocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CurrLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CurrLocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CurrLocation: $.ASN1Decoder<CurrLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CurrLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CurrLocation (el: _Element): CurrLocation {
    if (!_cached_decoder_for_CurrLocation) { _cached_decoder_for_CurrLocation = function (el: _Element): CurrLocation {
    let hostingAddr!: PartyNumber;
    let pumIdentity!: PumIdentity;
    let argExtension: OPTIONAL<PumiExtension>;
    const callbacks: $.DecodingMap = {
        "hostingAddr": (_el: _Element): void => { hostingAddr = _decode_PartyNumber(_el); },
        "pumIdentity": (_el: _Element): void => { pumIdentity = _decode_PumIdentity(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_PumiExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CurrLocation,
        _extension_additions_list_spec_for_CurrLocation,
        _root_component_type_list_2_spec_for_CurrLocation,
        undefined,
    );
    return new CurrLocation(
        hostingAddr,
        pumIdentity,
        argExtension
    );
}; }
    return _cached_decoder_for_CurrLocation(el);
}

let _cached_encoder_for_CurrLocation: $.ASN1Encoder<CurrLocation> | null = null;

/**
 * @summary Encodes a(n) CurrLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CurrLocation, encoded as an ASN.1 Element.
 */
export
function _encode_CurrLocation (value: CurrLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CurrLocation) { _cached_encoder_for_CurrLocation = function (value: CurrLocation, _elGetter: $.ASN1Encoder<CurrLocation>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.hostingAddr, $.BER));
    _components.push(/* REQUIRED   */ _encode_PumIdentity(value.pumIdentity, $.BER));
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_PumiExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CurrLocation(value, elGetter);
}

/* eslint-enable */
