/* eslint-disable */
import {
    OPTIONAL,
    OBJECT_IDENTIFIER,
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
/**
 * @summary CommitmentTypeQualifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommitmentTypeQualifier ::= SEQUENCE {
 *     commitmentQualifierId       COMMITMENT-QUALIFIER.&id,
 *     qualifier                   COMMITMENT-QUALIFIER.&Qualifier OPTIONAL }
 * ```
 *
 */
export
class CommitmentTypeQualifier {
    constructor (
        /**
         * @summary `commitmentQualifierId`.
         * @public
         * @readonly
         */
        readonly commitmentQualifierId: OBJECT_IDENTIFIER,
        /**
         * @summary `qualifier`.
         * @public
         * @readonly
         */
        readonly qualifier: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a CommitmentTypeQualifier
     * @description
     *
     * This takes an `object` and converts it to a `CommitmentTypeQualifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommitmentTypeQualifier`.
     * @returns {CommitmentTypeQualifier}
     */
    public static _from_object (_o: { [_K in keyof (CommitmentTypeQualifier)]: (CommitmentTypeQualifier)[_K] }): CommitmentTypeQualifier {
        return new CommitmentTypeQualifier(_o.commitmentQualifierId, _o.qualifier);
    }


}

/**
 * @summary The Leading Root Component Types of CommitmentTypeQualifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommitmentTypeQualifier: $.ComponentSpec[] = [
    new $.ComponentSpec("commitmentQualifierId", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("qualifier", true, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of CommitmentTypeQualifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommitmentTypeQualifier: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of CommitmentTypeQualifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_CommitmentTypeQualifier: $.ComponentSpec[] = [

];

let _cached_decoder_for_CommitmentTypeQualifier: $.ASN1Decoder<CommitmentTypeQualifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommitmentTypeQualifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommitmentTypeQualifier} The decoded data structure.
 */
export
function _decode_CommitmentTypeQualifier (el: _Element): CommitmentTypeQualifier {
    if (!_cached_decoder_for_CommitmentTypeQualifier) { _cached_decoder_for_CommitmentTypeQualifier = function (el: _Element): CommitmentTypeQualifier {
    let commitmentQualifierId!: OBJECT_IDENTIFIER;
    let qualifier: OPTIONAL<_Element>;
    const callbacks: $.DecodingMap = {
        "commitmentQualifierId": (_el: _Element): void => { commitmentQualifierId = $._decodeObjectIdentifier(_el); },
        "qualifier": (_el: _Element): void => { qualifier = $._decodeAny(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommitmentTypeQualifier,
        _extension_additions_list_spec_for_CommitmentTypeQualifier,
        _root_component_type_list_2_spec_for_CommitmentTypeQualifier,
        undefined,
    );
    return new CommitmentTypeQualifier( 
        commitmentQualifierId,
        qualifier
    );
}; }
    return _cached_decoder_for_CommitmentTypeQualifier(el);
}

let _cached_encoder_for_CommitmentTypeQualifier: $.ASN1Encoder<CommitmentTypeQualifier> | null = null;

/**
 * @summary Encodes a(n) CommitmentTypeQualifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommitmentTypeQualifier, encoded as an ASN.1 Element.
 */
export
function _encode_CommitmentTypeQualifier (value: CommitmentTypeQualifier, elGetter: $.ASN1Encoder<CommitmentTypeQualifier>): _Element {
    if (!_cached_encoder_for_CommitmentTypeQualifier) { _cached_encoder_for_CommitmentTypeQualifier = function (value: CommitmentTypeQualifier): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.commitmentQualifierId, $.DER),
            /* IF_ABSENT  */ ((value.qualifier === undefined) ? undefined : $._encodeAny(value.qualifier, $.DER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_CommitmentTypeQualifier(value, elGetter);
}


/* eslint-enable */
