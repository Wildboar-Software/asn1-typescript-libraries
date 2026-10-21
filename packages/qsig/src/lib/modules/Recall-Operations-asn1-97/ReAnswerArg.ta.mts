/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PresentedNumberScreened, _decode_PresentedNumberScreened, _encode_PresentedNumberScreened } from "../Addressing-Data-Elements-asn1-97/PresentedNumberScreened.ta.mjs";
import { PartySubaddress, _decode_PartySubaddress, _encode_PartySubaddress } from "../Addressing-Data-Elements-asn1-97/PartySubaddress.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { ReAnswerArg_argumentExtension, _decode_ReAnswerArg_argumentExtension, _encode_ReAnswerArg_argumentExtension } from "../Recall-Operations-asn1-97/ReAnswerArg-argumentExtension.ta.mjs";

/**
 * @summary ReAnswerArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReAnswerArg ::= SEQUENCE {
 *     connectedNumber [1] PresentedNumberScreened,
 *     connectedSubaddress [2] PartySubaddress OPTIONAL,
 *     connectedName [3] Name OPTIONAL,
 *     argumentExtension CHOICE {
 *         extension [6] IMPLICIT Extension {{REExtSet}},
 *         multipleExtension [7] IMPLICIT SEQUENCE OF Extension {{REExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ReAnswerArg {
    /**
     * @summary `connectedNumber`.
     * @public
     * @readonly
     */
    readonly connectedNumber: PresentedNumberScreened;
    /**
     * @summary `connectedSubaddress`.
     * @public
     * @readonly
     */
    readonly connectedSubaddress: OPTIONAL<PartySubaddress>;
    /**
     * @summary `connectedName`.
     * @public
     * @readonly
     */
    readonly connectedName: OPTIONAL<Name>;
    /**
     * @summary `argumentExtension`.
     * @public
     * @readonly
     */
    readonly argumentExtension: OPTIONAL<ReAnswerArg_argumentExtension>;

    constructor (
        connectedNumber: PresentedNumberScreened,
        connectedSubaddress: OPTIONAL<PartySubaddress>,
        connectedName: OPTIONAL<Name>,
        argumentExtension: OPTIONAL<ReAnswerArg_argumentExtension>
    ) {
        this.connectedNumber = connectedNumber;
        this.connectedSubaddress = connectedSubaddress;
        this.connectedName = connectedName;
        this.argumentExtension = argumentExtension;
    }

    /**
     * @summary Restructures an object into a ReAnswerArg
     * @description
     * 
     * This takes an `object` and converts it to a `ReAnswerArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReAnswerArg`.
     * @returns {ReAnswerArg}
     */
    public static _from_object (_o: { [_K in keyof (ReAnswerArg)]: (ReAnswerArg)[_K] }): ReAnswerArg {
        return new ReAnswerArg(_o.connectedNumber, _o.connectedSubaddress, _o.connectedName, _o.argumentExtension);
    }

}

/**
 * @summary The Leading Root Component Types of ReAnswerArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReAnswerArg: $.ComponentSpec[] = [
    new $.ComponentSpec("connectedNumber", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("connectedSubaddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("connectedName", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("argumentExtension", true, $.or($.hasTag(_TagClass.context, 6), $.hasTag(_TagClass.context, 7)))
];

/**
 * @summary The Trailing Root Component Types of ReAnswerArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReAnswerArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReAnswerArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReAnswerArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReAnswerArg: $.ASN1Decoder<ReAnswerArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReAnswerArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReAnswerArg (el: _Element): ReAnswerArg {
    if (!_cached_decoder_for_ReAnswerArg) { _cached_decoder_for_ReAnswerArg = function (el: _Element): ReAnswerArg {
    let connectedNumber!: PresentedNumberScreened;
    let connectedSubaddress: OPTIONAL<PartySubaddress>;
    let connectedName: OPTIONAL<Name>;
    let argumentExtension: OPTIONAL<ReAnswerArg_argumentExtension>;
    const callbacks: $.DecodingMap = {
        "connectedNumber": (_el: _Element): void => { connectedNumber = $._decode_explicit<PresentedNumberScreened>(() => _decode_PresentedNumberScreened)(_el); },
        "connectedSubaddress": (_el: _Element): void => { connectedSubaddress = $._decode_explicit<PartySubaddress>(() => _decode_PartySubaddress)(_el); },
        "connectedName": (_el: _Element): void => { connectedName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "argumentExtension": (_el: _Element): void => { argumentExtension = _decode_ReAnswerArg_argumentExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReAnswerArg,
        _extension_additions_list_spec_for_ReAnswerArg,
        _root_component_type_list_2_spec_for_ReAnswerArg,
        undefined,
    );
    return new ReAnswerArg(
        connectedNumber,
        connectedSubaddress,
        connectedName,
        argumentExtension
    );
}; }
    return _cached_decoder_for_ReAnswerArg(el);
}

let _cached_encoder_for_ReAnswerArg: $.ASN1Encoder<ReAnswerArg> | null = null;

/**
 * @summary Encodes a(n) ReAnswerArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReAnswerArg, encoded as an ASN.1 Element.
 */
export
function _encode_ReAnswerArg (value: ReAnswerArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReAnswerArg) { _cached_encoder_for_ReAnswerArg = function (value: ReAnswerArg, _elGetter: $.ASN1Encoder<ReAnswerArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_PresentedNumberScreened, $.BER)(value.connectedNumber, $.BER));
    if (value.connectedSubaddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_PartySubaddress, $.BER)(value.connectedSubaddress, $.BER));
    }
    if (value.connectedName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_Name, $.BER)(value.connectedName, $.BER));
    }
    if (value.argumentExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_ReAnswerArg_argumentExtension(value.argumentExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ReAnswerArg(value, elGetter);
}

/* eslint-enable */
