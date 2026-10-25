/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BasicService, _decode_BasicService, _encode_BasicService, _enum_for_BasicService } from "../Call-Diversion-Operations-asn1-97/BasicService.ta.mjs";
import { type PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { type DNDDeactivateArg_argumentExtension, _decode_DNDDeactivateArg_argumentExtension, _encode_DNDDeactivateArg_argumentExtension } from "../Do-Not-Disturb-Operations-asn1-97/DNDDeactivateArg-argumentExtension.ta.mjs";

/**
 * @summary DNDDeactivateArg
 * @description
 *
 * Remote SS-DND deactivation request (ECMA-194 §6.5.6.1.2;
 * ECMA-193 §8.2.1.7). Identifies the basic service and the served
 * user's PISN number. Deactivation is refused with `notActivated`
 * when SS-DND is not active for that pair (ECMA-194 §6.5.6.2.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNDDeactivateArg ::= SEQUENCE {
 *     basicService BasicService,
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
class DNDDeactivateArg {
    /**
     * @summary `basicService`.
     * @description
     *
     * Basic service to deactivate, or all basic services for which
     * SS-DND is subscribed (ECMA-193 §6.2.2.1.2, §8.2.1.7 NOTE 25).
     * The Served User PINX checks consistency of this element
     * (ECMA-194 §6.5.6.1.2).
     * @public
     * @readonly
     */
    readonly basicService: BasicService;
    /**
     * @summary `servedUserNr`.
     * @description
     *
     * PISN number for which SS-DND shall no longer apply. Required
     * on a remote deactivation (ECMA-193 §6.2.2.1.2, §8.2.1.7
     * NOTE 26).
     * @public
     * @readonly
     */
    readonly servedUserNr: PartyNumber;
    /**
     * @summary `argumentExtension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-194 §6.3.1 defines the
     * CHOICE and leaves `DNDExtSet` empty.
     * @public
     * @readonly
     */
    readonly argumentExtension: OPTIONAL<DNDDeactivateArg_argumentExtension>;

    constructor (
        basicService: BasicService,
        servedUserNr: PartyNumber,
        argumentExtension?: OPTIONAL<DNDDeactivateArg_argumentExtension>
    ) {
        this.basicService = basicService;
        this.servedUserNr = servedUserNr;
        this.argumentExtension = argumentExtension;
    }

    /**
     * @summary Restructures an object into a DNDDeactivateArg
     * @description
     * 
     * This takes an `object` and converts it to a `DNDDeactivateArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DNDDeactivateArg`.
     * @returns {DNDDeactivateArg}
     */
    public static _from_object (_o: { [_K in keyof (DNDDeactivateArg)]: (DNDDeactivateArg)[_K] }): DNDDeactivateArg {
        return new DNDDeactivateArg(_o.basicService, _o.servedUserNr, _o.argumentExtension);
    }

        /**
         * @summary The enum used as the type of the component `basicService`
         * @public
         * @static
         */

    public static _enum_for_basicService = _enum_for_BasicService;
}

/**
 * @summary The Leading Root Component Types of DNDDeactivateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DNDDeactivateArg: $.ComponentSpec[] = [
    new $.ComponentSpec("basicService", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("servedUserNr", false, $.hasAnyTag),
    new $.ComponentSpec("argumentExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of DNDDeactivateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DNDDeactivateArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DNDDeactivateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DNDDeactivateArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DNDDeactivateArg: $.ASN1Decoder<DNDDeactivateArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DNDDeactivateArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DNDDeactivateArg (el: _Element): DNDDeactivateArg {
    if (!_cached_decoder_for_DNDDeactivateArg) { _cached_decoder_for_DNDDeactivateArg = function (el: _Element): DNDDeactivateArg {
    let basicService!: BasicService;
    let servedUserNr!: PartyNumber;
    let argumentExtension: OPTIONAL<DNDDeactivateArg_argumentExtension>;
    const callbacks: $.DecodingMap = {
        "basicService": (_el: _Element): void => { basicService = _decode_BasicService(_el); },
        "servedUserNr": (_el: _Element): void => { servedUserNr = _decode_PartyNumber(_el); },
        "argumentExtension": (_el: _Element): void => { argumentExtension = _decode_DNDDeactivateArg_argumentExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DNDDeactivateArg,
        _extension_additions_list_spec_for_DNDDeactivateArg,
        _root_component_type_list_2_spec_for_DNDDeactivateArg,
        undefined,
    );
    return new DNDDeactivateArg(
        basicService,
        servedUserNr,
        argumentExtension
    );
}; }
    return _cached_decoder_for_DNDDeactivateArg(el);
}

let _cached_encoder_for_DNDDeactivateArg: $.ASN1Encoder<DNDDeactivateArg> | null = null;

/**
 * @summary Encodes a(n) DNDDeactivateArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DNDDeactivateArg, encoded as an ASN.1 Element.
 */
export
function _encode_DNDDeactivateArg (value: DNDDeactivateArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DNDDeactivateArg) { _cached_encoder_for_DNDDeactivateArg = function (value: DNDDeactivateArg, _elGetter: $.ASN1Encoder<DNDDeactivateArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_BasicService(value.basicService, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.servedUserNr, $.BER));
    if (value.argumentExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DNDDeactivateArg_argumentExtension(value.argumentExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DNDDeactivateArg(value, elGetter);
}

/* eslint-enable */
