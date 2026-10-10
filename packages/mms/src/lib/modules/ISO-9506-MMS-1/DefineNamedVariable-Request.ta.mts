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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
import { TypeSpecification, _decode_TypeSpecification, _encode_TypeSpecification } from "../ISO-9506-MMS-1/TypeSpecification.ta.mjs";


/**
 * @summary DefineNamedVariable_Request
 * @description
 *
 * Confirmed request to create a Named Variable that maps
 * to a real VMD variable via an Unnamed Variable address.
 * Intended for systems that cannot define Named Variables
 * locally. Requires `vnam` with `vadr`. Duplicate `&name`
 * or failed VMD LOAD ACL yields Result(-). Created object
 * is MMS Deletable; `&accessMethod` is public.
 * ISO 9506-1:2003 §14.10. ISO 9506-2:2003 §14.10.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefineNamedVariable-Request ::= SEQUENCE {
 *    variableName               [0] ObjectName,
 *    address                    [1] Address,
 *    typeSpecification          [2] TypeSpecification OPTIONAL   }
 * ```
 * 
 * @class
 */
export
class DefineNamedVariable_Request {
    constructor (
        /**
         * @summary `variableName`.
         * @description
         *
         * Unique `&name` among Named Variables of this scope.
         * ISO 9506-1:2003 §14.10.1.1.1.
         *
         * @public
         * @readonly
         */
        readonly variableName: ObjectName,
        /**
         * @summary `address`.
         * @description
         *
         * Base `&address` of the Unnamed Variable. Extra
         * addresses for the type are contiguous.
         * ISO 9506-1:2003 §14.10.1.1.2, §14.5.3.
         *
         * @public
         * @readonly
         */
        readonly address: Address,
        /**
         * @summary `typeSpecification`.
         * @description
         *
         * Optional `&typeDescription`. If omitted, inherit the
         * Unnamed Variable's type. Simple elements shall be
         * compatible with spanned Unnamed Variables (local
         * criteria). Type Names are resolved at definition.
         * ISO 9506-1:2003 §14.10.1.1.3, §14.2.3.
         *
         * @public
         * @readonly
         */
        readonly typeSpecification: OPTIONAL<TypeSpecification>
    ) {}

    /**
     * @summary Restructures an object into a DefineNamedVariable_Request
     * @description
     * 
     * This takes an `object` and converts it to a `DefineNamedVariable_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DefineNamedVariable_Request`.
     * @returns {DefineNamedVariable_Request}
     */
    public static _from_object (_o: { [_K in keyof (DefineNamedVariable_Request)]: (DefineNamedVariable_Request)[_K] }): DefineNamedVariable_Request {
        return new DefineNamedVariable_Request(_o.variableName, _o.address, _o.typeSpecification);
    }


}

/**
 * @summary The Leading Root Component Types of DefineNamedVariable_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DefineNamedVariable_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("variableName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("address", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("typeSpecification", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DefineNamedVariable_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DefineNamedVariable_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DefineNamedVariable_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DefineNamedVariable_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DefineNamedVariable_Request: $.ASN1Decoder<DefineNamedVariable_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefineNamedVariable_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DefineNamedVariable_Request (el: _Element): DefineNamedVariable_Request {
    if (!_cached_decoder_for_DefineNamedVariable_Request) { _cached_decoder_for_DefineNamedVariable_Request = function (el: _Element): DefineNamedVariable_Request {
    let variableName!: ObjectName;
    let address!: Address;
    let typeSpecification: OPTIONAL<TypeSpecification>;
    const callbacks: $.DecodingMap = {
        "variableName": (_el: _Element): void => { variableName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "address": (_el: _Element): void => { address = $._decode_explicit<Address>(() => _decode_Address)(_el); },
        "typeSpecification": (_el: _Element): void => { typeSpecification = $._decode_explicit<TypeSpecification>(() => _decode_TypeSpecification)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DefineNamedVariable_Request,
        _extension_additions_list_spec_for_DefineNamedVariable_Request,
        _root_component_type_list_2_spec_for_DefineNamedVariable_Request,
        undefined,
    );
    return new DefineNamedVariable_Request(
        variableName,
        address,
        typeSpecification
    );
}; }
    return _cached_decoder_for_DefineNamedVariable_Request(el);
}

let _cached_encoder_for_DefineNamedVariable_Request: $.ASN1Encoder<DefineNamedVariable_Request> | null = null;

/**
 * @summary Encodes a(n) DefineNamedVariable_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefineNamedVariable_Request, encoded as an ASN.1 Element.
 */
export
function _encode_DefineNamedVariable_Request (value: DefineNamedVariable_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DefineNamedVariable_Request) { _cached_encoder_for_DefineNamedVariable_Request = function (value: DefineNamedVariable_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.variableName, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_Address, $.BER)(value.address, $.BER),
            /* IF_ABSENT  */ ((value.typeSpecification === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_TypeSpecification, $.BER)(value.typeSpecification, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DefineNamedVariable_Request(value, elGetter);
}


/* eslint-enable */
