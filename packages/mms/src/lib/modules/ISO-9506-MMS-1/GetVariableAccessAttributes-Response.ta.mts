/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    VisibleString,
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
import { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
import { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary GetVariableAccessAttributes_Response
 * @description
 *
 * Result(+) of GetVariableAccessAttributes.
 * ISO 9506-1:2003 §14.9.1.2. ISO 9506-2:2003 §14.9.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetVariableAccessAttributes-Response ::= SEQUENCE {
 *    mmsDeletable           [0] IMPLICIT BOOLEAN,
 *    address                [1] Address OPTIONAL,
 *    typeDescription        [2] TypeDescription
 * ,  accessControlList      [3] IMPLICIT Identifier OPTIONAL
 *              -- Shall not appear in minor version one or two
 * ,  meaning                [4] IMPLICIT VisibleString OPTIONAL
 *    }
 * ```
 * 
 * @class
 */
export
class GetVariableAccessAttributes_Response {
    constructor (
        /**
         * @summary `mmsDeletable`.
         * @description
         *
         * MMS Deletable of the referenced object
         * (ISO 9506-1:2003 §9.1.4).
         * ISO 9506-1:2003 §14.9.1.2.1.
         *
         * @public
         * @readonly
         */
        readonly mmsDeletable: BOOLEAN,
        /**
         * @summary `address`.
         * @description
         *
         * Present iff `vadr` was negotiated and the object is
         * a Named Variable with `&accessMethod` public; then
         * it is that `&address`. Otherwise omitted.
         * ISO 9506-1:2003 §14.9.1.2.2.
         *
         * @public
         * @readonly
         */
        readonly address: OPTIONAL<Address>,
        /**
         * @summary `typeDescription`.
         * @description
         *
         * `&typeDescription` of the Named or Unnamed Variable.
         * ISO 9506-1:2003 §14.9.1.2.3.
         *
         * @public
         * @readonly
         */
        readonly typeDescription: TypeDescription,
        /**
         * @summary `accessControlList`.
         * @description
         *
         * `&accessControl`. Present iff `aco` CBB was
         * negotiated. Absent in minor versions 1 and 2.
         * ISO 9506-1:2003 §14.9.1.2.4.
         * ISO 9506-2:2003 §14.9.2.1.
         *
         * @public
         * @readonly
         */
        readonly accessControlList: OPTIONAL<Identifier>,
        /**
         * @summary `meaning`.
         * @description
         *
         * Named Variable `&meaning` if present. Present iff
         * Kind Of Variable is NAMED and `sem` CBB was
         * negotiated. ISO 9506-1:2003 §14.9.1.2.5.
         *
         * @public
         * @readonly
         */
        readonly meaning: OPTIONAL<VisibleString>
    ) {}

    /**
     * @summary Restructures an object into a GetVariableAccessAttributes_Response
     * @description
     * 
     * This takes an `object` and converts it to a `GetVariableAccessAttributes_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetVariableAccessAttributes_Response`.
     * @returns {GetVariableAccessAttributes_Response}
     */
    public static _from_object (_o: { [_K in keyof (GetVariableAccessAttributes_Response)]: (GetVariableAccessAttributes_Response)[_K] }): GetVariableAccessAttributes_Response {
        return new GetVariableAccessAttributes_Response(_o.mmsDeletable, _o.address, _o.typeDescription, _o.accessControlList, _o.meaning);
    }


}

/**
 * @summary The Leading Root Component Types of GetVariableAccessAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetVariableAccessAttributes_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("mmsDeletable", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("address", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("typeDescription", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("accessControlList", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("meaning", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of GetVariableAccessAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetVariableAccessAttributes_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetVariableAccessAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetVariableAccessAttributes_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetVariableAccessAttributes_Response: $.ASN1Decoder<GetVariableAccessAttributes_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetVariableAccessAttributes_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetVariableAccessAttributes_Response (el: _Element): GetVariableAccessAttributes_Response {
    if (!_cached_decoder_for_GetVariableAccessAttributes_Response) { _cached_decoder_for_GetVariableAccessAttributes_Response = function (el: _Element): GetVariableAccessAttributes_Response {
    let mmsDeletable!: BOOLEAN;
    let address: OPTIONAL<Address>;
    let typeDescription!: TypeDescription;
    let accessControlList: OPTIONAL<Identifier>;
    let meaning: OPTIONAL<VisibleString>;
    const callbacks: $.DecodingMap = {
        "mmsDeletable": (_el: _Element): void => { mmsDeletable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "address": (_el: _Element): void => { address = $._decode_explicit<Address>(() => _decode_Address)(_el); },
        "typeDescription": (_el: _Element): void => { typeDescription = $._decode_explicit<TypeDescription>(() => _decode_TypeDescription)(_el); },
        "accessControlList": (_el: _Element): void => { accessControlList = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "meaning": (_el: _Element): void => { meaning = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetVariableAccessAttributes_Response,
        _extension_additions_list_spec_for_GetVariableAccessAttributes_Response,
        _root_component_type_list_2_spec_for_GetVariableAccessAttributes_Response,
        undefined,
    );
    return new GetVariableAccessAttributes_Response(
        mmsDeletable,
        address,
        typeDescription,
        accessControlList,
        meaning
    );
}; }
    return _cached_decoder_for_GetVariableAccessAttributes_Response(el);
}

let _cached_encoder_for_GetVariableAccessAttributes_Response: $.ASN1Encoder<GetVariableAccessAttributes_Response> | null = null;

/**
 * @summary Encodes a(n) GetVariableAccessAttributes_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetVariableAccessAttributes_Response, encoded as an ASN.1 Element.
 */
export
function _encode_GetVariableAccessAttributes_Response (value: GetVariableAccessAttributes_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetVariableAccessAttributes_Response) { _cached_encoder_for_GetVariableAccessAttributes_Response = function (value: GetVariableAccessAttributes_Response): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.mmsDeletable, $.BER),
            /* IF_ABSENT  */ ((value.address === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_Address, $.BER)(value.address, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_TypeDescription, $.BER)(value.typeDescription, $.BER),
            /* IF_ABSENT  */ ((value.accessControlList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_Identifier, $.BER)(value.accessControlList, $.BER)),
            /* IF_ABSENT  */ ((value.meaning === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeVisibleString, $.BER)(value.meaning, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetVariableAccessAttributes_Response(value, elGetter);
}


/* eslint-enable */
