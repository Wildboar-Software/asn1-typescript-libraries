/* eslint-disable */
import {
    GeneralizedTime,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { ClientPartNotToKeep_querySpec, _decode_ClientPartNotToKeep_querySpec, _encode_ClientPartNotToKeep_querySpec } from "../ESFormat-PeriodicQuerySchedule/ClientPartNotToKeep-querySpec.ta.mjs";
import { Period, _decode_Period, _encode_Period } from "../ESFormat-PeriodicQuerySchedule/Period.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary ClientPartNotToKeep
 * @description
 * 
 * Periodic Query parameters the client suggests and the server may
 * override, so they are not kept as submitted. The query is mandatory on
 * create, as is the suggested period. Database names and additional search
 * information must not occur unless option bit 20 is set.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.3, §3.2.1.1.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartNotToKeep ::= SEQUENCE {
 *     databaseNames   [0] IMPLICIT SEQUENCE OF InternationalString OPTIONAL,
 *     --Must not occur unless option bit 20 is set
 *     querySpec       [1] CHOICE{
 *         actualQuery     [1] Query,
 *         packageName     [2] IMPLICIT InternationalString
 *     } OPTIONAL,
 *     --Mandatory for 'create'
 *     clientSuggestedPeriod       [2] Period OPTIONAL,
 *     -- mandatory for 'create'
 *     expiration                  [3] IMPLICIT GeneralizedTime OPTIONAL,
 *     resultSetPackage            [4] IMPLICIT InternationalString OPTIONAL,
 *     additionalSearchInfo        [5] OtherInformation OPTIONAL
 *     -- Must not occur unless option bit 20 is set
 * }
 * ```
 * 
 * @class
 */
export
class ClientPartNotToKeep {
    /**
     * @summary `databaseNames`.
     * @description
     * 
     * Must not occur unless option bit 20 is set. When the bit is set, the
     * client may list databases here. The list is required if `querySpec` is a
     * query rather than a persistent-query package name, or if that package
     * lists no databases. The server's list is in the server part.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.3, §3.2.1.1.3.
     * 
     * @public
     * @readonly
     */
    readonly databaseNames: OPTIONAL<InternationalString[]>;
    /**
     * @summary `querySpec`.
     * @description
     * 
     * Either a query or the name of a Persistent Query package. Mandatory on
     * create. If this is a query, or the named package lists no databases,
     * database names are required (placed according to option bit 20).
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.3.
     * 
     * @public
     * @readonly
     */
    readonly querySpec: OPTIONAL<ClientPartNotToKeep_querySpec>;
    /**
     * @summary `clientSuggestedPeriod`.
     * @description
     * 
     * Client's proposed time between runs. Mandatory on create. The server may
     * override it; the value in the package is the server part's period.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.3.
     * 
     * @public
     * @readonly
     */
    readonly clientSuggestedPeriod: OPTIONAL<Period>;
    /**
     * @summary `expiration`.
     * @description
     * 
     * Optional date and time at which the server should stop running this
     * schedule. Omitting it proposes no expiration. The server may override
     * the value. If the client supplies one and the server does not support
     * expiration, the server should reject the ES request. The package carries
     * the server's value.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.3.
     * 
     * @public
     * @readonly
     */
    readonly expiration: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `resultSetPackage`.
     * @description
     * 
     * Optional name of an existing Persistent Result Set package. If the
     * client omits it, the server creates a persistent result set unless
     * export parameters are included. The server part carries the name the
     * package will use.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.3.
     * 
     * @public
     * @readonly
     */
    readonly resultSetPackage: OPTIONAL<InternationalString>;
    /**
     * @summary `additionalSearchInfo`.
     * @description
     * 
     * Must not occur unless option bit 20 is set. Additional search
     * information not specified by the Periodic Query definition. On a Search
     * this parameter carries preferred format or content (request) or
     * by-products of the search (response), and only when version 3 is in
     * force.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.3, §3.2.1.1.3, §3.2.2.1.12.
     * 
     * @public
     * @readonly
     */
    readonly additionalSearchInfo: OPTIONAL<OtherInformation>;

    constructor (
        databaseNames: OPTIONAL<InternationalString[]>,
        querySpec: OPTIONAL<ClientPartNotToKeep_querySpec>,
        clientSuggestedPeriod: OPTIONAL<Period>,
        expiration: OPTIONAL<GeneralizedTime>,
        resultSetPackage: OPTIONAL<InternationalString>,
        additionalSearchInfo: OPTIONAL<OtherInformation>
    ) {
        this.databaseNames = databaseNames;
        this.querySpec = querySpec;
        this.clientSuggestedPeriod = clientSuggestedPeriod;
        this.expiration = expiration;
        this.resultSetPackage = resultSetPackage;
        this.additionalSearchInfo = additionalSearchInfo;
    }

    /**
     * @summary Restructures an object into a ClientPartNotToKeep
     * @description
     * 
     * This takes an `object` and converts it to a `ClientPartNotToKeep`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClientPartNotToKeep`.
     * @returns {ClientPartNotToKeep}
     */
    public static _from_object (_o: { [_K in keyof (ClientPartNotToKeep)]: (ClientPartNotToKeep)[_K] }): ClientPartNotToKeep {
        return new ClientPartNotToKeep(_o.databaseNames, _o.querySpec, _o.clientSuggestedPeriod, _o.expiration, _o.resultSetPackage, _o.additionalSearchInfo);
    }


}

/**
 * @summary The Leading Root Component Types of ClientPartNotToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ClientPartNotToKeep: $.ComponentSpec[] = [
    new $.ComponentSpec("databaseNames", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("querySpec", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("clientSuggestedPeriod", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("expiration", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("resultSetPackage", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("additionalSearchInfo", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ClientPartNotToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ClientPartNotToKeep: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ClientPartNotToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ClientPartNotToKeep: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ClientPartNotToKeep: $.ASN1Decoder<ClientPartNotToKeep> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartNotToKeep
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartNotToKeep (el: _Element): ClientPartNotToKeep {
    if (!_cached_decoder_for_ClientPartNotToKeep) { _cached_decoder_for_ClientPartNotToKeep = function (el: _Element): ClientPartNotToKeep {
    let databaseNames: OPTIONAL<InternationalString[]>;
    let querySpec: OPTIONAL<ClientPartNotToKeep_querySpec>;
    let clientSuggestedPeriod: OPTIONAL<Period>;
    let expiration: OPTIONAL<GeneralizedTime>;
    let resultSetPackage: OPTIONAL<InternationalString>;
    let additionalSearchInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "databaseNames": (_el: _Element): void => { databaseNames = $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString))(_el); },
        "querySpec": (_el: _Element): void => { querySpec = $._decode_explicit<ClientPartNotToKeep_querySpec>(() => _decode_ClientPartNotToKeep_querySpec)(_el); },
        "clientSuggestedPeriod": (_el: _Element): void => { clientSuggestedPeriod = $._decode_explicit<Period>(() => _decode_Period)(_el); },
        "expiration": (_el: _Element): void => { expiration = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "resultSetPackage": (_el: _Element): void => { resultSetPackage = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "additionalSearchInfo": (_el: _Element): void => { additionalSearchInfo = $._decode_explicit<OtherInformation>(() => _decode_OtherInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ClientPartNotToKeep,
        _extension_additions_list_spec_for_ClientPartNotToKeep,
        _root_component_type_list_2_spec_for_ClientPartNotToKeep,
        undefined,
    );
    return new ClientPartNotToKeep(
        databaseNames,
        querySpec,
        clientSuggestedPeriod,
        expiration,
        resultSetPackage,
        additionalSearchInfo
    );
}; }
    return _cached_decoder_for_ClientPartNotToKeep(el);
}

let _cached_encoder_for_ClientPartNotToKeep: $.ASN1Encoder<ClientPartNotToKeep> | null = null;

/**
 * @summary Encodes a(n) ClientPartNotToKeep into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartNotToKeep, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartNotToKeep (value: ClientPartNotToKeep, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartNotToKeep) { _cached_encoder_for_ClientPartNotToKeep = function (value: ClientPartNotToKeep, elGetter: $.ASN1Encoder<ClientPartNotToKeep>): _Element {
    const _components: _Element[] = new Array(6);
    let _components_i = 0;
    if (value.databaseNames !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.databaseNames, $.BER);
    }
    if (value.querySpec !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_ClientPartNotToKeep_querySpec, $.BER)(value.querySpec, $.BER);
    }
    if (value.clientSuggestedPeriod !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_Period, $.BER)(value.clientSuggestedPeriod, $.BER);
    }
    if (value.expiration !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeGeneralizedTime, $.BER)(value.expiration, $.BER);
    }
    if (value.resultSetPackage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_InternationalString, $.BER)(value.resultSetPackage, $.BER);
    }
    if (value.additionalSearchInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_OtherInformation, $.BER)(value.additionalSearchInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ClientPartNotToKeep(value, elGetter);
}


/* eslint-enable */
