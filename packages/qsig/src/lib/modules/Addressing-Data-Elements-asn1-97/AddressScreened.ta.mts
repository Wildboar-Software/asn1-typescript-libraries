/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { ScreeningIndicator, _decode_ScreeningIndicator, _encode_ScreeningIndicator, _enum_for_ScreeningIndicator } from "../Addressing-Data-Elements-asn1-97/ScreeningIndicator.ta.mjs";
import { type PartySubaddress, _decode_PartySubaddress, _encode_PartySubaddress } from "../Addressing-Data-Elements-asn1-97/PartySubaddress.ta.mjs";

/**
 * @summary AddressScreened
 * @description
 *
 * A party number, the result of screening it, and an optional subaddress
 * (ECMA-165 Annex B Table B.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddressScreened ::= SEQUENCE {
 *     partyNumber PartyNumber,
 *     screeningIndicator ScreeningIndicator,
 *     partySubaddress PartySubaddress OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AddressScreened {
    /**
     * @summary `partyNumber`.
     * @description
     *
     * Number of the party. The numbering plan is selected by the PartyNumber
     * alternative (ECMA-165 Annex B Table B.1).
     * @public
     * @readonly
     */
    readonly partyNumber: PartyNumber;
    /**
     * @summary `screeningIndicator`.
     * @description
     *
     * Who provided the number, and which network screened it (ECMA-165 Annex B
     * Table B.1).
     * @public
     * @readonly
     */
    readonly screeningIndicator: ScreeningIndicator;
    /**
     * @summary `partySubaddress`.
     * @description
     *
     * Optional subaddress. User-specified coding is not recommended; an NSAP
     * subaddress follows ITU-T X.213 (Table B.1).
     * @public
     * @readonly
     */
    readonly partySubaddress: OPTIONAL<PartySubaddress>;

    constructor (
        partyNumber: PartyNumber,
        screeningIndicator: ScreeningIndicator,
        partySubaddress?: OPTIONAL<PartySubaddress>
    ) {
        this.partyNumber = partyNumber;
        this.screeningIndicator = screeningIndicator;
        this.partySubaddress = partySubaddress;
    }

    /**
     * @summary Restructures an object into a AddressScreened
     * @description
     * 
     * This takes an `object` and converts it to a `AddressScreened`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddressScreened`.
     * @returns {AddressScreened}
     */
    public static _from_object (_o: { [_K in keyof (AddressScreened)]: (AddressScreened)[_K] }): AddressScreened {
        return new AddressScreened(_o.partyNumber, _o.screeningIndicator, _o.partySubaddress);
    }

        /**
         * @summary The enum used as the type of the component `screeningIndicator`
         * @public
         * @static
         */

    public static _enum_for_screeningIndicator: typeof _enum_for_ScreeningIndicator = _enum_for_ScreeningIndicator;
}

/**
 * @summary The Leading Root Component Types of AddressScreened
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AddressScreened: $.ComponentSpec[] = [
    new $.ComponentSpec("partyNumber", false, $.hasAnyTag),
    new $.ComponentSpec("screeningIndicator", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("partySubaddress", true, $.or($.hasTag(_TagClass.universal, 16), $.hasTag(_TagClass.universal, 4)))
];

/**
 * @summary The Trailing Root Component Types of AddressScreened
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AddressScreened: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AddressScreened
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AddressScreened: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AddressScreened: $.ASN1Decoder<AddressScreened> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddressScreened
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddressScreened (el: _Element): AddressScreened {
    if (!_cached_decoder_for_AddressScreened) { _cached_decoder_for_AddressScreened = function (el: _Element): AddressScreened {
    let partyNumber!: PartyNumber;
    let screeningIndicator!: ScreeningIndicator;
    let partySubaddress: OPTIONAL<PartySubaddress>;
    const callbacks: $.DecodingMap = {
        "partyNumber": (_el: _Element): void => { partyNumber = _decode_PartyNumber(_el); },
        "screeningIndicator": (_el: _Element): void => { screeningIndicator = _decode_ScreeningIndicator(_el); },
        "partySubaddress": (_el: _Element): void => { partySubaddress = _decode_PartySubaddress(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AddressScreened,
        _extension_additions_list_spec_for_AddressScreened,
        _root_component_type_list_2_spec_for_AddressScreened,
        undefined,
    );
    return new AddressScreened(
        partyNumber,
        screeningIndicator,
        partySubaddress
    );
}; }
    return _cached_decoder_for_AddressScreened(el);
}

let _cached_encoder_for_AddressScreened: $.ASN1Encoder<AddressScreened> | null = null;

/**
 * @summary Encodes a(n) AddressScreened into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddressScreened, encoded as an ASN.1 Element.
 */
export
function _encode_AddressScreened (value: AddressScreened, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddressScreened) { _cached_encoder_for_AddressScreened = function (value: AddressScreened, _elGetter: $.ASN1Encoder<AddressScreened>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.partyNumber, $.BER));
    _components.push(/* REQUIRED   */ _encode_ScreeningIndicator(value.screeningIndicator, $.BER));
    if (value.partySubaddress !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_PartySubaddress(value.partySubaddress, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AddressScreened(value, elGetter);
}

/* eslint-enable */
