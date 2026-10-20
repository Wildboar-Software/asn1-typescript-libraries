/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BasicService, _decode_BasicService, _encode_BasicService, _enum_for_BasicService } from "../Call-Diversion-Operations-asn1-97/BasicService.ta.mjs";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { DNDActivateArg_argumentExtension, _decode_DNDActivateArg_argumentExtension, _encode_DNDActivateArg_argumentExtension } from "../Do-Not-Disturb-Operations-asn1-97/DNDActivateArg-argumentExtension.ta.mjs";

/**
 * @summary DNDActivateArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNDActivateArg ::= SEQUENCE {
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
class DNDActivateArg {
    /**
     * @summary `basicService`.
     * @public
     * @readonly
     */
    readonly basicService: BasicService;
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
    readonly argumentExtension: OPTIONAL<DNDActivateArg_argumentExtension>;

    constructor (
        basicService: BasicService,
        servedUserNr: PartyNumber,
        argumentExtension: OPTIONAL<DNDActivateArg_argumentExtension>
    ) {
        this.basicService = basicService;
        this.servedUserNr = servedUserNr;
        this.argumentExtension = argumentExtension;
    }

    /**
     * @summary Restructures an object into a DNDActivateArg
     * @description
     * 
     * This takes an `object` and converts it to a `DNDActivateArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DNDActivateArg`.
     * @returns {DNDActivateArg}
     */
    public static _from_object (_o: { [_K in keyof (DNDActivateArg)]: (DNDActivateArg)[_K] }): DNDActivateArg {
        return new DNDActivateArg(_o.basicService, _o.servedUserNr, _o.argumentExtension);
    }

        /**
         * @summary The enum used as the type of the component `basicService`
         * @public
         * @static
         */

    public static _enum_for_basicService = _enum_for_BasicService;
}

/**
 * @summary The Leading Root Component Types of DNDActivateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DNDActivateArg: $.ComponentSpec[] = [
    new $.ComponentSpec("basicService", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("servedUserNr", false, $.hasAnyTag),
    new $.ComponentSpec("argumentExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of DNDActivateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DNDActivateArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DNDActivateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DNDActivateArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DNDActivateArg: $.ASN1Decoder<DNDActivateArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DNDActivateArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DNDActivateArg (el: _Element): DNDActivateArg {
    if (!_cached_decoder_for_DNDActivateArg) { _cached_decoder_for_DNDActivateArg = function (el: _Element): DNDActivateArg {
    let basicService!: BasicService;
    let servedUserNr!: PartyNumber;
    let argumentExtension: OPTIONAL<DNDActivateArg_argumentExtension>;
    const callbacks: $.DecodingMap = {
        "basicService": (_el: _Element): void => { basicService = _decode_BasicService(_el); },
        "servedUserNr": (_el: _Element): void => { servedUserNr = _decode_PartyNumber(_el); },
        "argumentExtension": (_el: _Element): void => { argumentExtension = _decode_DNDActivateArg_argumentExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DNDActivateArg,
        _extension_additions_list_spec_for_DNDActivateArg,
        _root_component_type_list_2_spec_for_DNDActivateArg,
        undefined,
    );
    return new DNDActivateArg(
        basicService,
        servedUserNr,
        argumentExtension
    );
}; }
    return _cached_decoder_for_DNDActivateArg(el);
}

let _cached_encoder_for_DNDActivateArg: $.ASN1Encoder<DNDActivateArg> | null = null;

/**
 * @summary Encodes a(n) DNDActivateArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DNDActivateArg, encoded as an ASN.1 Element.
 */
export
function _encode_DNDActivateArg (value: DNDActivateArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DNDActivateArg) { _cached_encoder_for_DNDActivateArg = function (value: DNDActivateArg, elGetter: $.ASN1Encoder<DNDActivateArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_BasicService(value.basicService, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.servedUserNr, $.BER));
    if (value.argumentExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DNDActivateArg_argumentExtension(value.argumentExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DNDActivateArg(value, elGetter);
}

/* eslint-enable */
