/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { DNDInterrogateArg_argumentExtension, _decode_DNDInterrogateArg_argumentExtension, _encode_DNDInterrogateArg_argumentExtension } from "../Do-Not-Disturb-Operations-asn1-97/DNDInterrogateArg-argumentExtension.ta.mjs";
// export { DNDInterrogateArg_argumentExtension, _decode_DNDInterrogateArg_argumentExtension, _encode_DNDInterrogateArg_argumentExtension } from "../Do-Not-Disturb-Operations-asn1-97/DNDInterrogateArg-argumentExtension.ta.mjs";


/**
 * @summary DNDInterrogateArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNDInterrogateArg ::= SEQUENCE {
 *     servedUserNr PartyNumber,
 *     argumentExtension CHOICE {
 *         extension [1] IMPLICIT Extension {{DNDExtSet}},
 *         sequenceOfExtn [2] IMPLICIT SEQUENCE OF Extension {{DNDExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DNDInterrogateArg {
    /**
     * @summary `servedUserNr`.
     * @public
     * @readonly
     */
    readonly servedUserNr: PartyNumber;
    /**
     * @summary `argumentExtension`.
     * @public
     * @readonly
     */
    readonly argumentExtension: OPTIONAL<DNDInterrogateArg_argumentExtension>;

    constructor (
        servedUserNr: PartyNumber,
        argumentExtension: OPTIONAL<DNDInterrogateArg_argumentExtension>
    ) {
        this.servedUserNr = servedUserNr;
        this.argumentExtension = argumentExtension;
    }

    /**
     * @summary Restructures an object into a DNDInterrogateArg
     * @description
     * 
     * This takes an `object` and converts it to a `DNDInterrogateArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DNDInterrogateArg`.
     * @returns {DNDInterrogateArg}
     */
    public static _from_object (_o: { [_K in keyof (DNDInterrogateArg)]: (DNDInterrogateArg)[_K] }): DNDInterrogateArg {
        return new DNDInterrogateArg(_o.servedUserNr, _o.argumentExtension);
    }


}

/**
 * @summary The Leading Root Component Types of DNDInterrogateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DNDInterrogateArg: $.ComponentSpec[] = [
    new $.ComponentSpec("servedUserNr", false, $.hasAnyTag),
    new $.ComponentSpec("argumentExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of DNDInterrogateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DNDInterrogateArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DNDInterrogateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DNDInterrogateArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DNDInterrogateArg: $.ASN1Decoder<DNDInterrogateArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DNDInterrogateArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DNDInterrogateArg (el: _Element): DNDInterrogateArg {
    if (!_cached_decoder_for_DNDInterrogateArg) { _cached_decoder_for_DNDInterrogateArg = function (el: _Element): DNDInterrogateArg {
    let servedUserNr!: PartyNumber;
    let argumentExtension: OPTIONAL<DNDInterrogateArg_argumentExtension>;
    const callbacks: $.DecodingMap = {
        "servedUserNr": (_el: _Element): void => { servedUserNr = _decode_PartyNumber(_el); },
        "argumentExtension": (_el: _Element): void => { argumentExtension = _decode_DNDInterrogateArg_argumentExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DNDInterrogateArg,
        _extension_additions_list_spec_for_DNDInterrogateArg,
        _root_component_type_list_2_spec_for_DNDInterrogateArg,
        undefined,
    );
    return new DNDInterrogateArg(
        servedUserNr,
        argumentExtension
    );
}; }
    return _cached_decoder_for_DNDInterrogateArg(el);
}

let _cached_encoder_for_DNDInterrogateArg: $.ASN1Encoder<DNDInterrogateArg> | null = null;

/**
 * @summary Encodes a(n) DNDInterrogateArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DNDInterrogateArg, encoded as an ASN.1 Element.
 */
export
function _encode_DNDInterrogateArg (value: DNDInterrogateArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DNDInterrogateArg) { _cached_encoder_for_DNDInterrogateArg = function (value: DNDInterrogateArg, elGetter: $.ASN1Encoder<DNDInterrogateArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.servedUserNr, $.BER));
    if (value.argumentExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DNDInterrogateArg_argumentExtension(value.argumentExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DNDInterrogateArg(value, elGetter);
}


/* eslint-enable */
