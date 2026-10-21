/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { WtmIdentity, _decode_WtmIdentity, _encode_WtmIdentity } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/WtmIdentity.ta.mjs";
import { WtmiExtension, _decode_WtmiExtension, _encode_WtmiExtension } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/WtmiExtension.ta.mjs";

/**
 * @summary CurrLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrLocation ::= SEQUENCE {
 *     visitPINX PartyNumber,
 *     -- The PISN number of the Visitor PINX,
 *     -- always a Complete Number.
 *     wtmIdentity WtmIdentity,
 *     -- The PISN number (always a Complete Number)
 *     -- and/or an alternative identifier of the WTMI user
 *     argExtension WtmiExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CurrLocation {
    /**
     * @summary `visitPINX`.
     * @public
     * @readonly
     */
    readonly visitPINX: PartyNumber;
    /**
     * @summary `wtmIdentity`.
     * @public
     * @readonly
     */
    readonly wtmIdentity: WtmIdentity;
    /**
     * @summary `argExtension`.
     * @public
     * @readonly
     */
    readonly argExtension: OPTIONAL<WtmiExtension>;

    constructor (
        visitPINX: PartyNumber,
        wtmIdentity: WtmIdentity,
        argExtension: OPTIONAL<WtmiExtension>
    ) {
        this.visitPINX = visitPINX;
        this.wtmIdentity = wtmIdentity;
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
        return new CurrLocation(_o.visitPINX, _o.wtmIdentity, _o.argExtension);
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
    new $.ComponentSpec("visitPINX", false, $.hasAnyTag),
    new $.ComponentSpec("wtmIdentity", false, $.hasAnyTag),
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
    let visitPINX!: PartyNumber;
    let wtmIdentity!: WtmIdentity;
    let argExtension: OPTIONAL<WtmiExtension>;
    const callbacks: $.DecodingMap = {
        "visitPINX": (_el: _Element): void => { visitPINX = _decode_PartyNumber(_el); },
        "wtmIdentity": (_el: _Element): void => { wtmIdentity = _decode_WtmIdentity(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_WtmiExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CurrLocation,
        _extension_additions_list_spec_for_CurrLocation,
        _root_component_type_list_2_spec_for_CurrLocation,
        undefined,
    );
    return new CurrLocation(
        visitPINX,
        wtmIdentity,
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
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.visitPINX, $.BER));
    _components.push(/* REQUIRED   */ _encode_WtmIdentity(value.wtmIdentity, $.BER));
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_WtmiExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CurrLocation(value, elGetter);
}

/* eslint-enable */
