/* eslint-disable */
import {
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { WtmoArg_extension, _decode_WtmoArg_extension, _encode_WtmoArg_extension } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/WtmoArg-extension.ta.mjs";

/**
 * @summary WtmoArg
 * @description
 *
 * Argument of `wtmoCall` (ECMA-304 §7.5.1). Carries destination digits as they
 * become available, and an end-of-number mark.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-304/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WtmoArg ::= SEQUENCE {
 *     destinationNumber [0] PartyNumber OPTIONAL,
 *     sendingComplete [1] IMPLICIT NULL OPTIONAL,
 *     extension CHOICE {
 *         single [2] IMPLICIT Extension {{WTMCHExtSet}},
 *         multiple [3] IMPLICIT SEQUENCE OF Extension {{WTMCHExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class WtmoArg {
    /**
     * @summary `destinationNumber`.
     * @description
     *
     * Destination digits already available (ECMA-304 §7.5.1.1). Further digits
     * may follow in another `wtmoCall`. Absent when no digits are available
     * yet. The Home PINX extends the call once a route can be selected
     * (§7.5.2.1).
     * @public
     * @readonly
     */
    readonly destinationNumber: OPTIONAL<PartyNumber>;
    /**
     * @summary `sendingComplete`.
     * @description
     *
     * Present when destination-number transmission has ended (ECMA-304
     * §7.5.1.1). The Home PINX then stops timer T3 and extends the call if it
     * has not already done so (§7.5.2.1).
     * @public
     * @readonly
     */
    readonly sendingComplete: OPTIONAL<NULL>;
    /**
     * @summary `extension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-304 §6.3.1 defines no members of
     * `WTMCHExtSet`.
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<WtmoArg_extension>;

    constructor (
        destinationNumber?: OPTIONAL<PartyNumber>,
        sendingComplete?: OPTIONAL<NULL>,
        extension?: OPTIONAL<WtmoArg_extension>
    ) {
        this.destinationNumber = destinationNumber;
        this.sendingComplete = sendingComplete;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a WtmoArg
     * @description
     * 
     * This takes an `object` and converts it to a `WtmoArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WtmoArg`.
     * @returns {WtmoArg}
     */
    public static _from_object (_o: { [_K in keyof (WtmoArg)]: (WtmoArg)[_K] }): WtmoArg {
        return new WtmoArg(_o.destinationNumber, _o.sendingComplete, _o.extension);
    }

}

/**
 * @summary The Leading Root Component Types of WtmoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_WtmoArg: $.ComponentSpec[] = [
    new $.ComponentSpec("destinationNumber", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sendingComplete", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 3)))
];

/**
 * @summary The Trailing Root Component Types of WtmoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_WtmoArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of WtmoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_WtmoArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_WtmoArg: $.ASN1Decoder<WtmoArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WtmoArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WtmoArg (el: _Element): WtmoArg {
    if (!_cached_decoder_for_WtmoArg) { _cached_decoder_for_WtmoArg = function (el: _Element): WtmoArg {
    let destinationNumber: OPTIONAL<PartyNumber>;
    let sendingComplete: OPTIONAL<NULL>;
    let extension: OPTIONAL<WtmoArg_extension>;
    const callbacks: $.DecodingMap = {
        "destinationNumber": (_el: _Element): void => { destinationNumber = $._decode_explicit<PartyNumber>(() => _decode_PartyNumber)(_el); },
        "sendingComplete": (_el: _Element): void => { sendingComplete = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "extension": (_el: _Element): void => { extension = _decode_WtmoArg_extension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_WtmoArg,
        _extension_additions_list_spec_for_WtmoArg,
        _root_component_type_list_2_spec_for_WtmoArg,
        undefined,
    );
    return new WtmoArg(
        destinationNumber,
        sendingComplete,
        extension
    );
}; }
    return _cached_decoder_for_WtmoArg(el);
}

let _cached_encoder_for_WtmoArg: $.ASN1Encoder<WtmoArg> | null = null;

/**
 * @summary Encodes a(n) WtmoArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WtmoArg, encoded as an ASN.1 Element.
 */
export
function _encode_WtmoArg (value: WtmoArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WtmoArg) { _cached_encoder_for_WtmoArg = function (value: WtmoArg, _elGetter: $.ASN1Encoder<WtmoArg>): _Element {
    const _components: _Element[] = [];
    if (value.destinationNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_PartyNumber, $.BER)(value.destinationNumber, $.BER));
    }
    if (value.sendingComplete !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.sendingComplete, $.BER));
    }
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_WtmoArg_extension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_WtmoArg(value, elGetter);
}

/* eslint-enable */
