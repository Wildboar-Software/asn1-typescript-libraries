/* eslint-disable */
import {
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { PumIdentity, _decode_PumIdentity, _encode_PumIdentity } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/PumIdentity.ta.mjs";
import { PumoArg_extension, _decode_PumoArg_extension, _encode_PumoArg_extension } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/PumoArg-extension.ta.mjs";

/**
 * @summary PumoArg
 * @description
 *
 * Argument of `pumoCall` (ECMA-284 §6.3.1, §7.5.1.1). The first invoke travels
 * in the SETUP to the Home PINX. Later invokes, in FACILITY messages, carry
 * more destination digits while the Home PINX is in PUMO-Await-Info. An invoke
 * received in FACILITY while the Home PINX is in PUMO-Idle is ignored
 * (§7.5.2.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-284/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PumoArg ::= SEQUENCE {
 *     destinationNumber [0] PartyNumber OPTIONAL,
 *     pumIdentity [1] PumIdentity OPTIONAL,
 *     -- The PISN number (always a Complete Number)
 *     -- and/or an alternative identifier of the PUM user.
 *     sendingComplete [2] IMPLICIT NULL OPTIONAL,
 *     extension CHOICE {
 *         single [3] IMPLICIT Extension {{PUMCHExtSet}},
 *         multiple [4] IMPLICIT SEQUENCE OF Extension {{PUMCHExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PumoArg {
    /**
     * @summary `destinationNumber`.
     * @description
     *
     * Destination digits known so far (§7.5.1.1). The Called party number of
     * the SETUP only has to reach the Home PINX; these digits are the called
     * destination. Further digits arrive in later invokes (§7.5.2.1).
     *
     * @public
     * @readonly
     */
    readonly destinationNumber: OPTIONAL<PartyNumber>;
    /**
     * @summary `pumIdentity`.
     * @description
     *
     * PISN number and/or alternative identifier of the PUM user (§6.3.1).
     * Included when the PUM user's number is not in the Calling party number
     * (§7.5.1.1). The Home PINX may use the alternative identifier to find that
     * number before extending the call (§7.5.2.1).
     *
     * @public
     * @readonly
     */
    readonly pumIdentity: OPTIONAL<PumIdentity>;
    /**
     * @summary `sendingComplete`.
     * @description
     *
     * Present when the destination number is complete (§7.5.1.1). Received in
     * PUMO-Await-Info, it stops timer T3 and the Home PINX extends the call
     * (§7.5.2.1).
     *
     * @public
     * @readonly
     */
    readonly sendingComplete: OPTIONAL<NULL>;
    /**
     * @summary `extension`.
     * @description
     *
     * Manufacturer-specific extension from `PUMCHExtSet`, one or several
     * (ECMA-284 §6.3.1). This module assigns no extensions.
     *
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<PumoArg_extension>;

    constructor (
        destinationNumber: OPTIONAL<PartyNumber>,
        pumIdentity: OPTIONAL<PumIdentity>,
        sendingComplete: OPTIONAL<NULL>,
        extension: OPTIONAL<PumoArg_extension>
    ) {
        this.destinationNumber = destinationNumber;
        this.pumIdentity = pumIdentity;
        this.sendingComplete = sendingComplete;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a PumoArg
     * @description
     * 
     * This takes an `object` and converts it to a `PumoArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PumoArg`.
     * @returns {PumoArg}
     */
    public static _from_object (_o: { [_K in keyof (PumoArg)]: (PumoArg)[_K] }): PumoArg {
        return new PumoArg(_o.destinationNumber, _o.pumIdentity, _o.sendingComplete, _o.extension);
    }

}

/**
 * @summary The Leading Root Component Types of PumoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PumoArg: $.ComponentSpec[] = [
    new $.ComponentSpec("destinationNumber", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("pumIdentity", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sendingComplete", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.context, 3), $.hasTag(_TagClass.context, 4)))
];

/**
 * @summary The Trailing Root Component Types of PumoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PumoArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PumoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PumoArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PumoArg: $.ASN1Decoder<PumoArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PumoArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PumoArg (el: _Element): PumoArg {
    if (!_cached_decoder_for_PumoArg) { _cached_decoder_for_PumoArg = function (el: _Element): PumoArg {
    let destinationNumber: OPTIONAL<PartyNumber>;
    let pumIdentity: OPTIONAL<PumIdentity>;
    let sendingComplete: OPTIONAL<NULL>;
    let extension: OPTIONAL<PumoArg_extension>;
    const callbacks: $.DecodingMap = {
        "destinationNumber": (_el: _Element): void => { destinationNumber = $._decode_explicit<PartyNumber>(() => _decode_PartyNumber)(_el); },
        "pumIdentity": (_el: _Element): void => { pumIdentity = $._decode_explicit<PumIdentity>(() => _decode_PumIdentity)(_el); },
        "sendingComplete": (_el: _Element): void => { sendingComplete = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "extension": (_el: _Element): void => { extension = _decode_PumoArg_extension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PumoArg,
        _extension_additions_list_spec_for_PumoArg,
        _root_component_type_list_2_spec_for_PumoArg,
        undefined,
    );
    return new PumoArg(
        destinationNumber,
        pumIdentity,
        sendingComplete,
        extension
    );
}; }
    return _cached_decoder_for_PumoArg(el);
}

let _cached_encoder_for_PumoArg: $.ASN1Encoder<PumoArg> | null = null;

/**
 * @summary Encodes a(n) PumoArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PumoArg, encoded as an ASN.1 Element.
 */
export
function _encode_PumoArg (value: PumoArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PumoArg) { _cached_encoder_for_PumoArg = function (value: PumoArg, _elGetter: $.ASN1Encoder<PumoArg>): _Element {
    const _components: _Element[] = [];
    if (value.destinationNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_PartyNumber, $.BER)(value.destinationNumber, $.BER));
    }
    if (value.pumIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_PumIdentity, $.BER)(value.pumIdentity, $.BER));
    }
    if (value.sendingComplete !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.sendingComplete, $.BER));
    }
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_PumoArg_extension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PumoArg(value, elGetter);
}

/* eslint-enable */
