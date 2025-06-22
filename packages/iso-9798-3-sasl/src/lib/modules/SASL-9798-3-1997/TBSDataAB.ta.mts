/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RandomNumber, _decode_RandomNumber, _encode_RandomNumber } from "../SASL-9798-3-1997/RandomNumber.ta.mjs";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "@wildboar/x500/src/lib/modules/CertificateExtensions/GeneralNames.ta.mjs";



/**
 * @summary TBSDataAB
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSDataAB ::= SEQUENCE {
 *     randomA RandomNumber,
 *     randomB RandomNumber,
 *     entityB [0] GeneralNames OPTIONAL,
 *     authID  [1] GeneralNames OPTIONAL
 * }
 * ```
 *
 * @class
 */
export
class TBSDataAB {
    constructor (
        /**
         * @summary `randomA`.
         * @public
         * @readonly
         */
        readonly randomA: RandomNumber,
        /**
         * @summary `randomB`.
         * @public
         * @readonly
         */
        readonly randomB: RandomNumber,
        /**
         * @summary `entityB`.
         * @public
         * @readonly
         */
        readonly entityB: OPTIONAL<GeneralNames>,
        /**
         * @summary `authID`.
         * @public
         * @readonly
         */
        readonly authID: OPTIONAL<GeneralNames>
    ) {}

    /**
     * @summary Restructures an object into a TBSDataAB
     * @description
     *
     * This takes an `object` and converts it to a `TBSDataAB`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSDataAB`.
     * @returns {TBSDataAB}
     */
    public static _from_object (_o: { [_K in keyof (TBSDataAB)]: (TBSDataAB)[_K] }): TBSDataAB {
        return new TBSDataAB(_o.randomA, _o.randomB, _o.entityB, _o.authID);
    }


}


/**
 * @summary The Leading Root Component Types of TBSDataAB
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TBSDataAB: $.ComponentSpec[] = [
    new $.ComponentSpec("randomA", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("randomB", false, $.hasTag(_TagClass.universal, 4)),
    /* FIXME: entityB COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: authID COULD_NOT_RESOLVE_TYPE_DEF */
];


/**
 * @summary The Trailing Root Component Types of TBSDataAB
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TBSDataAB: $.ComponentSpec[] = [

];


/**
 * @summary The Extension Addition Component Types of TBSDataAB
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_TBSDataAB: $.ComponentSpec[] = [

];


let _cached_decoder_for_TBSDataAB: $.ASN1Decoder<TBSDataAB> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TBSDataAB
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSDataAB} The decoded data structure.
 */
export
function _decode_TBSDataAB (el: _Element) {
    if (!_cached_decoder_for_TBSDataAB) { _cached_decoder_for_TBSDataAB = function (el: _Element): TBSDataAB {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let randomA!: RandomNumber;
    let randomB!: RandomNumber;
    let entityB: OPTIONAL<GeneralNames>;
    let authID: OPTIONAL<GeneralNames>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "randomA": (_el: _Element): void => { randomA = _decode_RandomNumber(_el); },
        "randomB": (_el: _Element): void => { randomB = _decode_RandomNumber(_el); },
        "entityB": (_el: _Element): void => { entityB = $._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); },
        "authID": (_el: _Element): void => { authID = $._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TBSDataAB,
        _extension_additions_list_spec_for_TBSDataAB,
        _root_component_type_list_2_spec_for_TBSDataAB,
        undefined,
    );
    return new TBSDataAB( /* SEQUENCE_CONSTRUCTOR_CALL */
        randomA,
        randomB,
        entityB,
        authID
    );
}; }
    return _cached_decoder_for_TBSDataAB(el);
}


let _cached_encoder_for_TBSDataAB: $.ASN1Encoder<TBSDataAB> | null = null;


/**
 * @summary Encodes a(n) TBSDataAB into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSDataAB, encoded as an ASN.1 Element.
 */
export
function _encode_TBSDataAB (value: TBSDataAB, elGetter: $.ASN1Encoder<TBSDataAB>) {
    if (!_cached_encoder_for_TBSDataAB) { _cached_encoder_for_TBSDataAB = function (value: TBSDataAB): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RandomNumber(value.randomA, $.BER),
            /* REQUIRED   */ _encode_RandomNumber(value.randomB, $.BER),
            /* IF_ABSENT  */ ((value.entityB === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GeneralNames, $.BER)(value.entityB, $.BER)),
            /* IF_ABSENT  */ ((value.authID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_GeneralNames, $.BER)(value.authID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TBSDataAB(value, elGetter);
}


/* eslint-enable */
