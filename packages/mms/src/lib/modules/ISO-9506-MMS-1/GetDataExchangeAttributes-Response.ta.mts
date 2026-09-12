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
import { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";
// export { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary GetDataExchangeAttributes_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetDataExchangeAttributes-Response ::= SEQUENCE {
 *    inUse                            [0] IMPLICIT BOOLEAN,
 *    listOfRequestTypeDescriptions    [1] IMPLICIT SEQUENCE OF TypeDescription,
 *    listOfResponseTypeDescriptions   [2] IMPLICIT SEQUENCE OF TypeDescription,
 *    programInvocation                [3] IMPLICIT Identifier OPTIONAL
 * ,  accessControlList                [4] IMPLICIT Identifier OPTIONAL
 *                     -- Shall not appear in minor version one or two
 *    }
 * ```
 * 
 * @class
 */
export
class GetDataExchangeAttributes_Response {
    constructor (
        /**
         * @summary `inUse`.
         * @public
         * @readonly
         */
        readonly inUse: BOOLEAN,
        /**
         * @summary `listOfRequestTypeDescriptions`.
         * @public
         * @readonly
         */
        readonly listOfRequestTypeDescriptions: TypeDescription[],
        /**
         * @summary `listOfResponseTypeDescriptions`.
         * @public
         * @readonly
         */
        readonly listOfResponseTypeDescriptions: TypeDescription[],
        /**
         * @summary `programInvocation`.
         * @public
         * @readonly
         */
        readonly programInvocation: OPTIONAL<Identifier>,
        /**
         * @summary `accessControlList`.
         * @public
         * @readonly
         */
        readonly accessControlList: OPTIONAL<Identifier>
    ) {}

    /**
     * @summary Restructures an object into a GetDataExchangeAttributes_Response
     * @description
     * 
     * This takes an `object` and converts it to a `GetDataExchangeAttributes_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetDataExchangeAttributes_Response`.
     * @returns {GetDataExchangeAttributes_Response}
     */
    public static _from_object (_o: { [_K in keyof (GetDataExchangeAttributes_Response)]: (GetDataExchangeAttributes_Response)[_K] }): GetDataExchangeAttributes_Response {
        return new GetDataExchangeAttributes_Response(_o.inUse, _o.listOfRequestTypeDescriptions, _o.listOfResponseTypeDescriptions, _o.programInvocation, _o.accessControlList);
    }


}

/**
 * @summary The Leading Root Component Types of GetDataExchangeAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetDataExchangeAttributes_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("inUse", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("listOfRequestTypeDescriptions", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("listOfResponseTypeDescriptions", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("programInvocation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("accessControlList", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of GetDataExchangeAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetDataExchangeAttributes_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetDataExchangeAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetDataExchangeAttributes_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetDataExchangeAttributes_Response: $.ASN1Decoder<GetDataExchangeAttributes_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetDataExchangeAttributes_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetDataExchangeAttributes_Response (el: _Element): GetDataExchangeAttributes_Response {
    if (!_cached_decoder_for_GetDataExchangeAttributes_Response) { _cached_decoder_for_GetDataExchangeAttributes_Response = function (el: _Element): GetDataExchangeAttributes_Response {
    let inUse!: BOOLEAN;
    let listOfRequestTypeDescriptions!: TypeDescription[];
    let listOfResponseTypeDescriptions!: TypeDescription[];
    let programInvocation: OPTIONAL<Identifier>;
    let accessControlList: OPTIONAL<Identifier>;
    const callbacks: $.DecodingMap = {
        "inUse": (_el: _Element): void => { inUse = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "listOfRequestTypeDescriptions": (_el: _Element): void => { listOfRequestTypeDescriptions = $._decode_implicit<TypeDescription[]>(() => $._decodeSequenceOf<TypeDescription>(() => _decode_TypeDescription))(_el); },
        "listOfResponseTypeDescriptions": (_el: _Element): void => { listOfResponseTypeDescriptions = $._decode_implicit<TypeDescription[]>(() => $._decodeSequenceOf<TypeDescription>(() => _decode_TypeDescription))(_el); },
        "programInvocation": (_el: _Element): void => { programInvocation = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "accessControlList": (_el: _Element): void => { accessControlList = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetDataExchangeAttributes_Response,
        _extension_additions_list_spec_for_GetDataExchangeAttributes_Response,
        _root_component_type_list_2_spec_for_GetDataExchangeAttributes_Response,
        undefined,
    );
    return new GetDataExchangeAttributes_Response(
        inUse,
        listOfRequestTypeDescriptions,
        listOfResponseTypeDescriptions,
        programInvocation,
        accessControlList
    );
}; }
    return _cached_decoder_for_GetDataExchangeAttributes_Response(el);
}

let _cached_encoder_for_GetDataExchangeAttributes_Response: $.ASN1Encoder<GetDataExchangeAttributes_Response> | null = null;

/**
 * @summary Encodes a(n) GetDataExchangeAttributes_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetDataExchangeAttributes_Response, encoded as an ASN.1 Element.
 */
export
function _encode_GetDataExchangeAttributes_Response (value: GetDataExchangeAttributes_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetDataExchangeAttributes_Response) { _cached_encoder_for_GetDataExchangeAttributes_Response = function (value: GetDataExchangeAttributes_Response): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.inUse, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<TypeDescription>(() => _encode_TypeDescription, $.BER), $.BER)(value.listOfRequestTypeDescriptions, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<TypeDescription>(() => _encode_TypeDescription, $.BER), $.BER)(value.listOfResponseTypeDescriptions, $.BER),
            /* IF_ABSENT  */ ((value.programInvocation === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_Identifier, $.BER)(value.programInvocation, $.BER)),
            /* IF_ABSENT  */ ((value.accessControlList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_Identifier, $.BER)(value.accessControlList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetDataExchangeAttributes_Response(value, elGetter);
}


/* eslint-enable */
