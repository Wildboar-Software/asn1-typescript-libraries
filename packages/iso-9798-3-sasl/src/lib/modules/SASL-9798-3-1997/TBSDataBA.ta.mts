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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { RandomNumber, _decode_RandomNumber, _encode_RandomNumber } from "../SASL-9798-3-1997/RandomNumber.ta.mjs";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "@wildboar/x500/src/lib/modules/CertificateExtensions/GeneralNames.ta.mjs";



/**
 * @summary TBSDataBA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSDataBA ::= SEQUENCE {
 *     randomB RandomNumber,
 *     randomA RandomNumber,
 *     randomC RandomNumber,
 *     entityA GeneralNames OPTIONAL
 * }
 * ```
 *
 * @class
 */
export
class TBSDataBA {
    constructor (
        /**
         * @summary `randomB`.
         * @public
         * @readonly
         */
        readonly randomB: RandomNumber,
        /**
         * @summary `randomA`.
         * @public
         * @readonly
         */
        readonly randomA: RandomNumber,
        /**
         * @summary `randomC`.
         * @public
         * @readonly
         */
        readonly randomC: RandomNumber,
        /**
         * @summary `entityA`.
         * @public
         * @readonly
         */
        readonly entityA: OPTIONAL<GeneralNames>
    ) {}

    /**
     * @summary Restructures an object into a TBSDataBA
     * @description
     *
     * This takes an `object` and converts it to a `TBSDataBA`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSDataBA`.
     * @returns {TBSDataBA}
     */
    public static _from_object (_o: { [_K in keyof (TBSDataBA)]: (TBSDataBA)[_K] }): TBSDataBA {
        return new TBSDataBA(_o.randomB, _o.randomA, _o.randomC, _o.entityA);
    }


}


/**
 * @summary The Leading Root Component Types of TBSDataBA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TBSDataBA: $.ComponentSpec[] = [
    new $.ComponentSpec("randomB", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("randomA", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("randomC", false, $.hasTag(_TagClass.universal, 4)),
    /* FIXME: entityA COULD_NOT_RESOLVE_TYPE_DEF */
];


/**
 * @summary The Trailing Root Component Types of TBSDataBA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TBSDataBA: $.ComponentSpec[] = [

];


/**
 * @summary The Extension Addition Component Types of TBSDataBA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_TBSDataBA: $.ComponentSpec[] = [

];


let _cached_decoder_for_TBSDataBA: $.ASN1Decoder<TBSDataBA> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TBSDataBA
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSDataBA} The decoded data structure.
 */
export
function _decode_TBSDataBA (el: _Element) {
    if (!_cached_decoder_for_TBSDataBA) { _cached_decoder_for_TBSDataBA = function (el: _Element): TBSDataBA {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let randomB!: RandomNumber;
    let randomA!: RandomNumber;
    let randomC!: RandomNumber;
    let entityA: OPTIONAL<GeneralNames>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "randomB": (_el: _Element): void => { randomB = _decode_RandomNumber(_el); },
        "randomA": (_el: _Element): void => { randomA = _decode_RandomNumber(_el); },
        "randomC": (_el: _Element): void => { randomC = _decode_RandomNumber(_el); },
        "entityA": (_el: _Element): void => { entityA = _decode_GeneralNames(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TBSDataBA,
        _extension_additions_list_spec_for_TBSDataBA,
        _root_component_type_list_2_spec_for_TBSDataBA,
        undefined,
    );
    return new TBSDataBA( /* SEQUENCE_CONSTRUCTOR_CALL */
        randomB,
        randomA,
        randomC,
        entityA
    );
}; }
    return _cached_decoder_for_TBSDataBA(el);
}


let _cached_encoder_for_TBSDataBA: $.ASN1Encoder<TBSDataBA> | null = null;


/**
 * @summary Encodes a(n) TBSDataBA into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSDataBA, encoded as an ASN.1 Element.
 */
export
function _encode_TBSDataBA (value: TBSDataBA, elGetter: $.ASN1Encoder<TBSDataBA>) {
    if (!_cached_encoder_for_TBSDataBA) { _cached_encoder_for_TBSDataBA = function (value: TBSDataBA): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RandomNumber(value.randomB, $.BER),
            /* REQUIRED   */ _encode_RandomNumber(value.randomA, $.BER),
            /* REQUIRED   */ _encode_RandomNumber(value.randomC, $.BER),
            /* IF_ABSENT  */ ((value.entityA === undefined) ? undefined : _encode_GeneralNames(value.entityA, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TBSDataBA(value, elGetter);
}


/* eslint-enable */
