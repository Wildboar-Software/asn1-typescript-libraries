/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    UTCTime,
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
import {
    Name, _decode_Name, _encode_Name
} from "@wildboar/x500/src/lib/modules/InformationFramework/Name.ta.mjs";


/**
 * @summary CrlIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CrlIdentifier ::= SEQUENCE {
 *     crlissuer       Name,
 *     crlIssuedTime   UTCTime,
 *     crlNumber       INTEGER OPTIONAL }
 * ```
 *
 * @class
 */
export
class CrlIdentifier {
    constructor (
        /**
         * @summary `crlissuer`.
         * @public
         * @readonly
         */
        readonly crlissuer: Name,
        /**
         * @summary `crlIssuedTime`.
         * @public
         * @readonly
         */
        readonly crlIssuedTime: UTCTime,
        /**
         * @summary `crlNumber`.
         * @public
         * @readonly
         */
        readonly crlNumber: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a CrlIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `CrlIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CrlIdentifier`.
     * @returns {CrlIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (CrlIdentifier)]: (CrlIdentifier)[_K] }): CrlIdentifier {
        return new CrlIdentifier(_o.crlissuer, _o.crlIssuedTime, _o.crlNumber);
    }


}

/**
 * @summary The Leading Root Component Types of CrlIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CrlIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("crlissuer", false, $.hasAnyTag),
    new $.ComponentSpec("crlIssuedTime", false, $.hasTag(_TagClass.universal, 23)),
    new $.ComponentSpec("crlNumber", true, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CrlIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CrlIdentifier: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of CrlIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_CrlIdentifier: $.ComponentSpec[] = [

];

let _cached_decoder_for_CrlIdentifier: $.ASN1Decoder<CrlIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CrlIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CrlIdentifier} The decoded data structure.
 */
export
function _decode_CrlIdentifier (el: _Element) {
    if (!_cached_decoder_for_CrlIdentifier) { _cached_decoder_for_CrlIdentifier = function (el: _Element): CrlIdentifier {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let crlissuer!: Name;
    let crlIssuedTime!: UTCTime;
    let crlNumber: OPTIONAL<INTEGER>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "crlissuer": (_el: _Element): void => { crlissuer = _decode_Name(_el); },
        "crlIssuedTime": (_el: _Element): void => { crlIssuedTime = $._decodeUTCTime(_el); },
        "crlNumber": (_el: _Element): void => { crlNumber = $._decodeInteger(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CrlIdentifier,
        _extension_additions_list_spec_for_CrlIdentifier,
        _root_component_type_list_2_spec_for_CrlIdentifier,
        undefined,
    );
    return new CrlIdentifier( /* SEQUENCE_CONSTRUCTOR_CALL */
        crlissuer,
        crlIssuedTime,
        crlNumber
    );
}; }
    return _cached_decoder_for_CrlIdentifier(el);
}

let _cached_encoder_for_CrlIdentifier: $.ASN1Encoder<CrlIdentifier> | null = null;

/**
 * @summary Encodes a(n) CrlIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CrlIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_CrlIdentifier (value: CrlIdentifier, elGetter: $.ASN1Encoder<CrlIdentifier>) {
    if (!_cached_encoder_for_CrlIdentifier) { _cached_encoder_for_CrlIdentifier = function (value: CrlIdentifier): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Name(value.crlissuer, $.DER),
            /* REQUIRED   */ $._encodeUTCTime(value.crlIssuedTime, $.DER),
            /* IF_ABSENT  */ ((value.crlNumber === undefined) ? undefined : $._encodeInteger(value.crlNumber, $.DER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_CrlIdentifier(value, elGetter);
}


/* eslint-enable */
