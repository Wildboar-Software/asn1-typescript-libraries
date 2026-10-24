/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type AgreementID, _decode_AgreementID, _encode_AgreementID } from "../IN-SCF-SCF-datatypes/AgreementID.ta.mjs";
// export { AgreementID, _decode_AgreementID, _encode_AgreementID } from "../IN-SCF-SCF-datatypes/AgreementID.ta.mjs";
import { type ScfAddress, _decode_ScfAddress, _encode_ScfAddress } from "../IN-SCF-SCF-datatypes/ScfAddress.ta.mjs";
// export { ScfAddress, _decode_ScfAddress, _encode_ScfAddress } from "../IN-SCF-SCF-datatypes/ScfAddress.ta.mjs";
import { type Credentials, _decode_Credentials, _encode_Credentials } from "../DirectoryAbstractService/Credentials.ta.mjs";
// export { Credentials, _decode_Credentials, _encode_Credentials } from "../DirectoryAbstractService/Credentials.ta.mjs";


/**
 * @summary SCFBindArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCFBindArgument ::= SEQUENCE {
 *   agreementID            [0]  AgreementID,
 *   originatingScfAddress  [1]  ScfAddress OPTIONAL,
 *   -- absent in a chained operation request which crosses
 *   -- an international internetworking boundary
 *   credentials            [2]  Credentials OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SCFBindArgument {
    /**
     * @summary `agreementID`.
     * @public
     * @readonly
     */
    readonly agreementID: AgreementID;
    /**
     * @summary `originatingScfAddress`.
     * @public
     * @readonly
     */
    readonly originatingScfAddress: OPTIONAL<ScfAddress>;
    /**
     * @summary `credentials`.
     * @public
     * @readonly
     */
    readonly credentials: OPTIONAL<Credentials>;

    constructor (
        agreementID: AgreementID,
        originatingScfAddress?: OPTIONAL<ScfAddress>,
        credentials?: OPTIONAL<Credentials>
    ) {
        this.agreementID = agreementID;
        this.originatingScfAddress = originatingScfAddress;
        this.credentials = credentials;
    }

    /**
     * @summary Restructures an object into a SCFBindArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SCFBindArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCFBindArgument`.
     * @returns {SCFBindArgument}
     */
    public static _from_object (_o: { [_K in keyof (SCFBindArgument)]: (SCFBindArgument)[_K] }): SCFBindArgument {
        return new SCFBindArgument(_o.agreementID, _o.originatingScfAddress, _o.credentials);
    }


}

/**
 * @summary The Leading Root Component Types of SCFBindArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCFBindArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("agreementID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("originatingScfAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("credentials", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SCFBindArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCFBindArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCFBindArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCFBindArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCFBindArgument: $.ASN1Decoder<SCFBindArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCFBindArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCFBindArgument (el: _Element): SCFBindArgument {
    if (!_cached_decoder_for_SCFBindArgument) { _cached_decoder_for_SCFBindArgument = function (el: _Element): SCFBindArgument {
    let agreementID!: AgreementID;
    let originatingScfAddress: OPTIONAL<ScfAddress>;
    let credentials: OPTIONAL<Credentials>;
    const callbacks: $.DecodingMap = {
        "agreementID": (_el: _Element): void => { agreementID = $._decode_implicit<AgreementID>(() => _decode_AgreementID)(_el); },
        "originatingScfAddress": (_el: _Element): void => { originatingScfAddress = $._decode_implicit<ScfAddress>(() => _decode_ScfAddress)(_el); },
        "credentials": (_el: _Element): void => { credentials = $._decode_explicit<Credentials>(() => _decode_Credentials)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SCFBindArgument,
        _extension_additions_list_spec_for_SCFBindArgument,
        _root_component_type_list_2_spec_for_SCFBindArgument,
        undefined,
    );
    return new SCFBindArgument(
        agreementID,
        originatingScfAddress,
        credentials
    );
}; }
    return _cached_decoder_for_SCFBindArgument(el);
}

let _cached_encoder_for_SCFBindArgument: $.ASN1Encoder<SCFBindArgument> | null = null;

/**
 * @summary Encodes a(n) SCFBindArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCFBindArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SCFBindArgument (value: SCFBindArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCFBindArgument) { _cached_encoder_for_SCFBindArgument = function (value: SCFBindArgument, elGetter: $.ASN1Encoder<SCFBindArgument>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AgreementID, $.BER)(value.agreementID, $.BER));
    if (value.originatingScfAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_ScfAddress, $.BER)(value.originatingScfAddress, $.BER));
    }
    if (value.credentials !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_Credentials, $.BER)(value.credentials, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SCFBindArgument(value, elGetter);
}


/* eslint-enable */
