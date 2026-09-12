/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
import { ScatteredAccessDescription, _decode_ScatteredAccessDescription, _encode_ScatteredAccessDescription } from "../ISO-9506-MMS-1A/ScatteredAccessDescription.ta.mjs";
// export { ScatteredAccessDescription, _decode_ScatteredAccessDescription, _encode_ScatteredAccessDescription } from "../ISO-9506-MMS-1A/ScatteredAccessDescription.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary GetScatteredAccessAttributes_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetScatteredAccessAttributes-Response ::= SEQUENCE {
 *     mmsDeletable                     [0] IMPLICIT BOOLEAN,
 *     scatteredAccessDescription       [1] IMPLICIT ScatteredAccessDescription,
 *     accessControlList                [2] IMPLICIT Identifier OPTIONAL
 *     -- Shall not appear in minor version one or two
 * }
 * ```
 * 
 * @class
 */
export
class GetScatteredAccessAttributes_Response {
    constructor (
        /**
         * @summary `mmsDeletable`.
         * @public
         * @readonly
         */
        readonly mmsDeletable: BOOLEAN,
        /**
         * @summary `scatteredAccessDescription`.
         * @public
         * @readonly
         */
        readonly scatteredAccessDescription: ScatteredAccessDescription,
        /**
         * @summary `accessControlList`.
         * @public
         * @readonly
         */
        readonly accessControlList: OPTIONAL<Identifier>
    ) {}

    /**
     * @summary Restructures an object into a GetScatteredAccessAttributes_Response
     * @description
     * 
     * This takes an `object` and converts it to a `GetScatteredAccessAttributes_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetScatteredAccessAttributes_Response`.
     * @returns {GetScatteredAccessAttributes_Response}
     */
    public static _from_object (_o: { [_K in keyof (GetScatteredAccessAttributes_Response)]: (GetScatteredAccessAttributes_Response)[_K] }): GetScatteredAccessAttributes_Response {
        return new GetScatteredAccessAttributes_Response(_o.mmsDeletable, _o.scatteredAccessDescription, _o.accessControlList);
    }


}

/**
 * @summary The Leading Root Component Types of GetScatteredAccessAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetScatteredAccessAttributes_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("mmsDeletable", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("scatteredAccessDescription", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accessControlList", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of GetScatteredAccessAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetScatteredAccessAttributes_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetScatteredAccessAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetScatteredAccessAttributes_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetScatteredAccessAttributes_Response: $.ASN1Decoder<GetScatteredAccessAttributes_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetScatteredAccessAttributes_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetScatteredAccessAttributes_Response (el: _Element): GetScatteredAccessAttributes_Response {
    if (!_cached_decoder_for_GetScatteredAccessAttributes_Response) { _cached_decoder_for_GetScatteredAccessAttributes_Response = function (el: _Element): GetScatteredAccessAttributes_Response {
    let mmsDeletable!: BOOLEAN;
    let scatteredAccessDescription!: ScatteredAccessDescription;
    let accessControlList: OPTIONAL<Identifier>;
    const callbacks: $.DecodingMap = {
        "mmsDeletable": (_el: _Element): void => { mmsDeletable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "scatteredAccessDescription": (_el: _Element): void => { scatteredAccessDescription = $._decode_implicit<ScatteredAccessDescription>(() => _decode_ScatteredAccessDescription)(_el); },
        "accessControlList": (_el: _Element): void => { accessControlList = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetScatteredAccessAttributes_Response,
        _extension_additions_list_spec_for_GetScatteredAccessAttributes_Response,
        _root_component_type_list_2_spec_for_GetScatteredAccessAttributes_Response,
        undefined,
    );
    return new GetScatteredAccessAttributes_Response(
        mmsDeletable,
        scatteredAccessDescription,
        accessControlList
    );
}; }
    return _cached_decoder_for_GetScatteredAccessAttributes_Response(el);
}

let _cached_encoder_for_GetScatteredAccessAttributes_Response: $.ASN1Encoder<GetScatteredAccessAttributes_Response> | null = null;

/**
 * @summary Encodes a(n) GetScatteredAccessAttributes_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetScatteredAccessAttributes_Response, encoded as an ASN.1 Element.
 */
export
function _encode_GetScatteredAccessAttributes_Response (value: GetScatteredAccessAttributes_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetScatteredAccessAttributes_Response) { _cached_encoder_for_GetScatteredAccessAttributes_Response = function (value: GetScatteredAccessAttributes_Response): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.mmsDeletable, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ScatteredAccessDescription, $.BER)(value.scatteredAccessDescription, $.BER),
            /* IF_ABSENT  */ ((value.accessControlList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_Identifier, $.BER)(value.accessControlList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetScatteredAccessAttributes_Response(value, elGetter);
}


/* eslint-enable */
